/*jshint esversion: 6 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
// Cors Middleware
app.use(cors());

// Port number
const port = process.env.PORT || 8080;

//set static folder
app.use(express.static(path.join(__dirname, 'source/build')));

// Body Parser Middleware
app.use(bodyParser.json());

// Index route
// app.get('/', (req, res) => {
//     res.send('Invalid Endpoint');
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'source/build/index.html'));
});

// Start server
app.listen(port, () => {
    console.log(`\n\nServer started on port ${port}`);
});
