import React, { useState } from 'react';
import axios from 'axios';

const Predict = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [modelName, setModelName] = useState('');
  const [response, setResponse] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleModelNameChange = (event) => {
    setModelName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('model_name', modelName);
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResponse(response.data.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Model Name:</label>
          <input type="text" value={modelName} onChange={handleModelNameChange} />
        </div>
        <div>
          <label>Choose Image:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
      {response && (
        <div>
          <h3>Response from server:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Predict;