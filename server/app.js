// This file starts the server off, describes the basic data, and creates the API
// External Imports
const express = require("express");
const cors = require("cors");

// Internal Imports
const zeldaGames = require("./zelda-API");
const logRoute = require("./route-logger"); // Middleware, what the requests pass through

// Create the basic server
const app = express();