/* The actual application */
const express = require('express');
const middleware = require('./utils/middleware');
const setup = require('./utils/dbService');
const blogsRouter = require('./controllers/blogs');


// create express app instance
const app = express();

// connect to database
setup();

// use middlawares
app.use(express.json());  // this middlaware parses requests with JSON payloads
app.use(middleware.requestLogger);

// use routers (controllers) to handle route events
app.use('/api/blogs', blogsRouter);

// handle unknown endpoint and errors
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;