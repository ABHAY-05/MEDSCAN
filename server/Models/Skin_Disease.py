import numpy as np
import cv2
from tensorflow.keras.models import Model
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense
from tensorflow.keras.applications import ResNet50
from dotenv import load_dotenv
import os

load_dotenv()

class SkinDisease:
    def __init__(self, num_classes=23, img_size=224) -> None:
        self.img_size = img_size
        self.num_classes = num_classes
        self.model = self.load_Model()
        self.clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
        self.disease_classes = [
            'Light Diseases and Disorders of Pigmentation',
            'Lupus and other Connective Tissue diseases',
            'Acne and Rosacea',
            'Systemic Disease',
            'Poison Ivy and other Contact Dermatitis',
            'Vascular Tumors',
            'Urticaria Hives',
            'Atopic Dermatitis',
            'Bullous Disease',
            'Hair Loss Photos Alopecia and other Hair Diseases',
            'Tinea Ringworm Candidiasis and other Fungal Infections',
            'Psoriasis pictures Lichen Planus and related diseases',
            'Melanoma Skin Cancer Nevi and Moles',
            'Nail Fungus and other Nail Disease',
            'Scabies Lyme Disease and other Infestations and Bites',
            'Eczema Photos',
            'Exanthems and Drug Eruptions',
            'Herpes HPV and other STDs Photos',
            'Seborrheic Keratoses and other Benign Tumors',
            'Actinic Keratosis Basal Cell Carcinoma and other Malignant Lesions',
            'Vasculitis',
            'Cellulitis Impetigo and other Bacterial Infections',
            'Warts Molluscum and other Viral Infections'
        ]
    
    def load_Model(self) -> Model:
        base_model = ResNet50(weights='imagenet', include_top=False, input_shape=(self.img_size, self.img_size, 3))

        x = GlobalAveragePooling2D()(base_model.output)
        x = Dense(512, activation='relu')(x)
        predictions = Dense(self.num_classes, activation='softmax')(x)
        model = Model(inputs=base_model.input, outputs=predictions)
        
        model.load_weights(os.getenv("SKIN_WEIGHTS_PATH"))

        return model

    def preprocess_image(self, image: np.ndarray) -> np.ndarray:
        b, g, r = cv2.split(image)
        
        image = cv2.merge([self.clahe.apply(b), self.clahe.apply(g), self.clahe.apply(r)])
        
        median_filtered_image = cv2.medianBlur(image, 5)
        
        bm, gm, rm = cv2.split(median_filtered_image)

        clahe_image = cv2.merge([self.clahe.apply(bm), self.clahe.apply(gm), self.clahe.apply(rm)])
        
        clahe_image = cv2.cvtColor(clahe_image, cv2.COLOR_BGR2RGB)
        
        clahe_image = cv2.resize(clahe_image, (self.img_size, self.img_size))
        
        clahe_image = np.expand_dims(clahe_image, axis=0)
        
        return clahe_image
    
    def predict(self, image: np.ndarray) -> str:
        img = self.preprocess_image(image)
        predictions = self.model.predict(img)
        predicted_class = np.argmax(predictions[0])
        
        return self.disease_classes[predicted_class]