import numpy as np
import cv2
from skimage import exposure, feature
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, BatchNormalization, ReLU, MaxPooling2D, Flatten, Dense
from dotenv import load_dotenv
import os

load_dotenv()

class EyeDisease:
    def __init__(self, num_classes=8, img_size=224):
        self.img_size = img_size
        self.num_classes = num_classes
        self.model = self.load_Model()
        self.clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
        self.reference_image = self.load_reference_image(os.getenv("IMAGE_PATH"))
        self.disease_classes = [
            "Normal", "Cataract", "Diabetes", "Glaucoma",
            "Hypertension", "Myopia", "Age Issues", "Other"
        ]

    def load_reference_image(self, reference_image_path: str) -> np.ndarray:
        reference_image = cv2.imread(reference_image_path)
        br, gr, rr = cv2.split(reference_image)
        reference_image = cv2.merge([self.clahe.apply(br), self.clahe.apply(gr), self.clahe.apply(rr)])
        return reference_image
    
    def preprocess_image(self, image: np.ndarray) -> np.ndarray:
        b, g, r = cv2.split(image)
        image = cv2.merge([self.clahe.apply(b), self.clahe.apply(g), self.clahe.apply(r)])

        matched_image = exposure.match_histograms(image, self.reference_image)

        matched_image = np.uint8(matched_image)
        median_filtered_image = cv2.medianBlur(matched_image, 5)

        bm, gm, rm = cv2.split(median_filtered_image)

        clahe_image = cv2.merge([self.clahe.apply(bm), self.clahe.apply(gm), self.clahe.apply(rm)])
        clahe_image = cv2.cvtColor(clahe_image, cv2.COLOR_BGR2RGB)

        return clahe_image

    def extract_features(self, image: np.ndarray, block_size: tuple=(64, 64), P: int=8, R: int=1) -> np.ndarray:
        resized_image = cv2.resize(image, (self.img_size, self.img_size))

        blocks = [resized_image[i:i+block_size[0], j:j+block_size[1]]
                  for i in range(0, resized_image.shape[0], block_size[0])
                  for j in range(0, resized_image.shape[1], block_size[1])]
        
        concatenated_features = np.array([])
        for block in blocks:
            for channel in range(3):
                channel_block = block[:, :, channel]
                ulbp_features_channel = feature.local_binary_pattern(channel_block, P, R, method='uniform')
                ulbp_features_flat_channel = ulbp_features_channel.flatten()
                concatenated_features = np.concatenate((concatenated_features, ulbp_features_flat_channel))

        return concatenated_features

    def load_Model(self) -> Sequential:
        model = Sequential()

        model.add(Conv2D(8, (1, 5), strides=(1, 1), padding='same', input_shape=(self.img_size, self.img_size, 3)))
        model.add(BatchNormalization())
        model.add(ReLU())

        model.add(MaxPooling2D(pool_size=(1, 2), strides=(2, 2), padding='valid'))

        model.add(Conv2D(16, (1, 5), strides=(1, 1), padding='same'))
        model.add(BatchNormalization())
        model.add(ReLU())

        model.add(MaxPooling2D(pool_size=(1, 2), strides=(2, 2), padding='valid'))

        model.add(Conv2D(8, (1, 5), strides=(1, 1), padding='same'))
        model.add(BatchNormalization())
        model.add(ReLU())

        model.add(MaxPooling2D(pool_size=(1, 2), strides=(2, 2), padding='valid'))

        model.add(Flatten())

        model.add(Dense(100, activation='relu'))
        model.add(Dense(self.num_classes, activation='softmax'))

        model.load_weights(os.getenv("EYE_WEIGHTS_PATH"))

        return model

    def predict(self, image: np.ndarray) -> str:
        image = self.preprocess_image(image)
        features = self.extract_features(image)
        features = features.reshape((1, self.img_size, self.img_size, 3))
        predictions = self.model.predict(features)
        predicted_class = np.argmax(predictions[0])

        return self.disease_classes[predicted_class]
