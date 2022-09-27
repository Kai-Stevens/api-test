// This file starts the server off, describes the basic data, and creates the API
// External Imports
const express = require("express");
const cors = require("cors");

// Internal Imports
const fetchZelda = require("./zelda-API");
const zeldaDataProm = fetchZelda();
// to get the data zeldaDataProm.then(data => {do something})
const logRoute = require("./route-logger"); // Middleware, what the requests pass through


// Create the basic server
const app = express();

// Configuration:
// Allow requests from other origins (hoppscotch)
app.use(cors());
// Tell express to read the body of POST requests - so users can actually make them
app.use(express.json());
// Add our middleware which logs the requested routes
app.use(logRoute);


// Routes:
app.get("/", (req, res) => {
    res.send("Welcome to the Zelda compendium");
});

app.get("/games", (req, res) => {
    zeldaDataProm.then(data => res.send(data)); // This is how you send the async promise data
});

module.exports = app;