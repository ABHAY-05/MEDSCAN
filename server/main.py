from fastapi import FastAPI, File, UploadFile, HTTPException, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
import cv2
from io import BytesIO
from Models import *

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


class Model:
    def __init__(self) -> None:   
        self.Pneumonia = Pneumonia.Pneumonia()
        self.SkinDisease = Skin_Disease.SkinDisease()
        self.EyeDisease = Eye_Disease.EyeDisease()

    async def predict_pneumonia(self, image: np.ndarray) -> str:
        return self.Pneumonia.predict(image)
    
    async def predict_skin_disease(self, image: np.ndarray) -> str:
        return self.SkinDisease.predict(image)
    
    async def predict_eye_disease(self, image: np.ndarray) -> str:
        return self.EyeDisease.predict(image)

model = Model()

def read_imagefile(file, model_name) -> np.ndarray:
    if model_name == "pneumonia":
        image = load_img(BytesIO(file), target_size=(256, 256))
        image = img_to_array(image)
    else:
        image = cv2.imdecode(np.frombuffer(file, np.uint8), cv2.IMREAD_COLOR)

    if image.ndim == 2:
        image = cv2.cvtColor(image, cv2.COLOR_GRAY2RGB)
    
    return image

@app.post("/predict")
async def main(model_name: str = Form(...), file: UploadFile = File(...)):
    try:
        image = read_imagefile(await file.read(), model_name)
        
        if model_name == "pneumonia":
            prediction = await model.predict_pneumonia(image)
        elif model_name == "skinDisease":
            prediction = await model.predict_skin_disease(image)
        elif model_name == "eyeDisease":
            prediction = await model.predict_eye_disease(image)
        else:
            raise HTTPException(status_code=400, detail="Invalid model name")
        
        return JSONResponse(content={"prediction": prediction})
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))