# MedScan - Advanced Medical Image Analysis for Disease Diagnosis

MedScan is an advanced web application that leverages AI to provide automated detection and diagnosis of various medical conditions, including pneumonia, eye diseases, and skin diseases. This project is built using a combination of FastAPI for the backend and React (with Vite and pnpm) for the frontend.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **Pneumonia Detection:** Analyze chest X-rays to detect signs of pneumonia.
- **Eye Disease Detection:** Diagnose various eye conditions using advanced image analysis.
- **Skin Disease Detection:** Identify different skin diseases through AI-powered analysis.
- **User-Friendly Interface:** Clean and intuitive UI for easy navigation and usage.

## Project Structure

- **Frontend:** React, Vite, Tailwind CSS, CSS.
- **Backend:** FastAPI.
- **Model Training:** Python, TensorFlow/Keras, OpenCV.

## Installation

### Prerequisites

- Node.js and pnpm (for the frontend)
- Python 3.10.x and pip (for the backend)

### Clone the Repository

```sh
git clone https://github.com/ABHAY-05/MEDSCAN.git
cd medscan
```

### Backend Setup

1. Navigate to the backend directory:

    ```sh
    cd server
    ```

2. Create a virtual environment and activate it:

    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install the required packages:

    ```sh
    pip install -r requirements.txt
    ```

4. Run the FastAPI server:

    ```sh
    uvicorn main:app --reload
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```sh
    cd client
    ```

2. Install the required packages using pnpm:

    ```sh
    pnpm install
    ```

3. Start the development server:

    ```sh
    pnpm run dev
    ```

## Environment Variables

Create a `.env` file in the root of the `client` directory and add the following environment variables:

```plaintext
VITE_URL
VITE_PHONE
VITE_EMAIL
VITE_TEAM1
VITE_TEAM2
VITE_TEAM3
VITE_TEAM4
```

## Usage

1. Navigate to the frontend URL provided by Vite (usually `http://127.0.0.1:5173`).
2. Use the navigation bar to access different sections: Home, Services, About, and Contact Us.
3. In the Services section, choose the type of medical analysis you want to perform.
4. Upload the relevant medical image and click "Get Started" to see the results.

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss your changes.

## Contact

- **Project Repository:** [MedScan](https://github.com/ABHAY-05/MEDSCAN.git)
- **Email:** abhayvermajune5@gmail.com
