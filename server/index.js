/* eslint-disable no-console */
// import and configure dotenv, import other lobraries and modules
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes');
// const logger = require('./logger');

// initializes a new Express application
const app = express();

// middelwares
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(morgan('dev'));
// app.use(logger);

// Create route
app.use('/api', router);

// Start the server on port;
const port = process.env.PORT || 3000;

// If we are being run directly, run the server.
// If the module is being imported as a module in another file,
// this code block will not be executed

if (!module.parent) {
  app.listen(port, () => {
    console.log(`LISTENING ON PORT http://localhost:${port}/`);
  });
}

module.exports = app;
