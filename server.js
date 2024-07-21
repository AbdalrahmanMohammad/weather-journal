// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes

const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));

/* Spin up the server*/
const port = 3000;
const server = app.listen(port, listening);
function listening() {
    console.log(`running on localhost: ${port}`);
};

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
