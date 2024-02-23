import base64
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
from pydantic import BaseModel
import cv2

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3000/potato",
    "http://localhost:3000/tomato",
    "http://localhost:3000/takepic"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

TOMATO_MODEL_PREV = tf.keras.models.load_model("./2")
# TOMATO_MODEL = tf.keras.models.load_model("http://localhost:8888/tree/models/1/")

TOMATO_CLASS_NAMES = ["Early Blight", "Late Blight", "Leaf Mold", "Septoria Leaf Spot",  "Target Spot", "Tomato Mosaic Virus", "Tomato Healthy"]


@app.get("/ping")
async def ping():
    return "Hello, I am alive"

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.post("/predicttomato")
async def predict(
    file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    
    predictions = TOMATO_MODEL_PREV.predict(img_batch)

    predicted_class = TOMATO_CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }


# @app.post("/predictpotato")
# async def predict(
#     file: UploadFile = File(...)
# ):
#     image = read_file_as_image(await file.read())
#     img_batch = np.expand_dims(image, 0)
    
#     predictions = POTATO_MODEL.predict(img_batch)

#     predicted_class = POTATO_CLASS_NAMES[np.argmax(predictions[0])]
#     confidence = np.max(predictions[0])
#     return {
#         'class': predicted_class,
#         'confidence': float(confidence)
#     }


# class ImageData(BaseModel):
#     image: str
    
# def preprocess_image(base64_image, target_size=(None, 256, 256)):
#     base64_image_bytes = base64.b64decode(base64_image)
#     image = Image.open(BytesIO(base64_image_bytes))
#     image_np = np.array(image)
#     resized_image = cv2.resize(image_np, (target_size[1], target_size[2]))
#     resized_image = resized_image / 256
#     return resized_image


# @app.post("/predictcaptured")
# async def predict(
#     image_data: ImageData
# ):
    
#     image = preprocess_image(image_data.image)
#     img_batch = np.expand_dims(image, 0)
    
#     predictions = POTATO_MODEL.predict(img_batch)

#     predicted_class = POTATO_CLASS_NAMES[np.argmax(predictions[0])]
#     confidence = np.max(predictions[0])
#     return {
#         'class': predicted_class,
#         'confidence': float(confidence)
#     }


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)
