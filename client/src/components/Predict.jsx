import React, { useState } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const Predict = ({ modelName }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setResponse('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('model_name', modelName);
    formData.append('file', selectedFile);

    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_URL}/predict`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResponse(response.data.prediction);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTitle = () => {
    switch (modelName) {
      case 'pneumonia':
        return 'Pneumonia Detection';
      case 'eyeDisease':
        return 'Eye Disease Detection';
      case 'skinDisease':
        return 'Skin Disease Detection';
      default:
        return 'Disease Detection';
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-blue-700 mb-10">{getTitle()}</h1>
      <div className="bg-white p-10 shadow-md rounded-lg w-3/4 md:w-1/2 flex">
        <div className="flex flex-col items-center w-1/2">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">Upload Image</h2>
          {!selectedFile && (
            <>
              <input type="file" onChange={handleFileChange} className="block w-full text-lg px-3 py-1.5 border rounded-md" />
            </>
          )}
          {selectedFile && (
            <div className="mt-4">
              <img src={URL.createObjectURL(selectedFile)} alt="Selected" className="max-w-xs max-h-64 object-cover rounded-md shadow-md" />
              <form onSubmit={handleSubmit} className="w-full flex flex-col items-center mt-6">
                <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                  Predict
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="ml-6 flex flex-col items-center justify-center w-1/2">
          {loading ? (
            <ClipLoader size={50} color={"#123abc"} loading={loading} />
          ) : (
            response && (
              <>
                <h3 className="text-2xl font-semibold mb-6 text-blue-700">Result</h3>
                <div className="p-4 bg-gray-200 rounded-lg w-full h-full flex items-center justify-center">
                  <p>{response}</p>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Predict;
