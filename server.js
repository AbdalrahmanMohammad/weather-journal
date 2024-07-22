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
const port = 3001;
const server = app.listen(port, listening);
function listening() {
    console.log(`running on localhost: ${port}`);
};

// Initialize all route with a callback function
app.get('/all', getAll);

// Callback function to complete GET '/all'
function getAll(req, res) {
    res.send(projectData);
}


// POST route to add data
app.post('/add', (req, res) => {
    const { date, temp, user_response } = req.body;

    // Add data to projectData with the specified structure
    projectData = {
        date: date,
        temp: temp,
        user_response: user_response
    };

    res.send({ message: "Data added successfully" });
});