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
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-10 mt-[2vh]">{getTitle()}</h1>
      <div className="bg-white p-6 md:p-10 shadow-md rounded-lg w-11/12 md:w-3/4 lg:w-1/2 flex flex-col md:flex-row">
        <div className="flex flex-col items-center w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4 md:mb-6 text-blue-700">Upload Image</h2>
          {!selectedFile && (
            <input type="file" onChange={handleFileChange} className="block w-full text-lg px-3 py-1.5 border rounded-md" />
          )}
          {selectedFile && (
            <div className="mt-4 w-full flex flex-col items-center">
              <img src={URL.createObjectURL(selectedFile)} alt="Selected" className="max-w-xs max-h-64 object-cover rounded-md shadow-md mb-4" />
              <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                  Predict
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 md:ml-6">
          {loading ? (
            <ClipLoader size={50} color={"#123abc"} loading={loading} />
          ) : (
            response && (
              <>
                <h3 className="text-2xl font-semibold mb-4 md:mb-6 text-blue-700">Result</h3>
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