# Weather Journal

## Overview

This project is a Weather Journal application that utilizes Node.js as the backend and demonstrates the interactions between the backend and frontend using the fetch method. The application also integrates with the OpenWeather API to fetch weather data based on user input.

## Features

- **Node.js Backend**: The server-side logic is handled using Node.js.
- **Frontend-Backend Interaction**: Demonstrates the use of the fetch method to communicate between the frontend and backend.
- **External API Integration**: Fetches weather data from the OpenWeather API.
- **User Input**: Allows users to enter their ZIP code and a personal note, which are then stored and displayed along with the fetched weather data.

## Technologies Used

- **Node.js**: Backend server.
- **Express.js**: Web framework for Node.js.
- **Fetch API**: Used for making HTTP requests from the frontend.
- **OpenWeather API**: External API used to get weather data.
- **HTML, CSS, JavaScript**: Frontend technologies.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/AbdalrahmanMohammad/weather-journal.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd weather-journal
    ```

3. **Install the dependencies**:
    ```bash
    npm install
    ```

4. **Start the server**:
    ```bash
    node server.js
    ```

5. **Open the application**:
    Open your web browser and go to `http://localhost:3001`.

## Usage

1. **Enter ZIP Code**: Input a valid ZIP code.
2. **Personal Note**: Add a personal note or feeling.
3. **Submit**: Click the submit button to fetch weather data and display it along with your note.
