const express = require('express');
const app = express();

// Wrap for async/await routes middleware
const asyncMiddleware = require('../../utils/wrap');

// Require 
const ReadCourses = require('./controllers/readAll')

// Route for check
app.get('/', async(req, res) => {
    res.json("HEY");
});

// Route for get courses
app.get('/courses', asyncMiddleware(ReadCourses));

module.exports = app;