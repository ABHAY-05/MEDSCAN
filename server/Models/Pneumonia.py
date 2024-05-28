import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense
import cv2
from efficientnet.tfkeras import EfficientNetB0

class Pneumonia:
    def __init__(self, image_size=256) -> None:
        self.img_size = image_size
        self.model = self.load_Model()
    
    def load_Model(self) -> Sequential:
        model = Sequential()

        base = EfficientNetB0(input_shape=(self.img_size, self.img_size, 3), weights='imagenet', include_top=False)

        model.add(base)
        model.add(GlobalAveragePooling2D())
        model.add(Dense(1, activation='sigmoid'))
        
        model.load_weights('data\\pneumonia_weights.h5')

        return model
    
    def preProcess(self, image: np.ndarray) -> np.array:
        img = cv2.resize(image, (self.img_size, self.img_size))
        img = img / 255.0 
        img = np.expand_dims(img, axis=0)
        
        return img
    
    def predict(self, image: np.ndarray) -> str:
        img = self.preProcess(image)
        predictions = self.model.predict(img)
        predicted_class = (predictions[0] > 0.5)[0]

        return "Pneumonia Detected" if predicted_class else "No Pneumonia Detected"
