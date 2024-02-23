import React, { useRef, useState } from 'react';
import axios from 'axios';
// import * as tf from '@tensorflow/tfjs';

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [data, setData] = useState();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');
    setCapturedImage(dataUrl);
    
  };
console.log(capturedImage)
  const uploadImage = async () => {
    if (!capturedImage) {
        throw new Error('No image captured');
      }
      const base64ImageData = capturedImage.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
      try {
        const response = await axios.post('http://localhost:8000/predictcaptured', { image: base64ImageData });
        if (response.status === 200) {
          setData(response.data);
          console.log(response.data);
          console.log('Image uploaded successfully');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
  };

  
  // const captureAndClassify = async () => {
  //   const videoElement = videoRef.current;
  //   const canvasElement = canvasRef.current;
  //   const context = canvasElement.getContext('2d');
  //   context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

  //   const imageData = context.getImageData(0, 0, canvasElement.width, canvasElement.height);

  //   // Load the pre-trained model
  //   const model = await tf.loadLayersModel('../../../api/2/2.json');

  //   // Preprocess the image
  //   const img = tf.browser.fromPixels(imageData).resizeNearestNeighbor([224, 224]).toFloat();
  //   const offset = tf.scalar(127.5);
  //   const normalized = img.sub(offset).div(offset).expandDims();

  //   // Perform inference
  //   const predictions = await model.predict(normalized).data();
  //   const labels = ['Early', 'Late', 'Healthy']; // Replace with your own labels

  //   // Display prediction
  //   const prediction = labels[predictions.indexOf(Math.max(...predictions))];
  //   console.log('Prediction:', prediction);
  // };

  return (
    <div>
      <video ref={videoRef} autoPlay />
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={captureImage}>Capture Image</button> {/*captureAndClassify*/}
      {capturedImage && <button onClick={uploadImage}>Upload Image</button>} 
        
    </div>
  );
};

export default Camera;
