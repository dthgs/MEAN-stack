/* Main server entry point file */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const users = require('./routes/users');

const port = 1234;

// Cors Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

// Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});

app.get('/hi', (req, res) => {
    res.send('Hello');
});

// Start server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});