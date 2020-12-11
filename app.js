/* The actual application */
const express = require('express');
const cors = require('cors');
const dbSetup = require('./utils/dbService');
const middleware = require('./utils/middleware');
const blogsRouter = require('./controllers/blogs');
const morgan = require('morgan');


// create express app instance
const app = express();

// connect to database
dbSetup();
morgan.token('user', (request, response) => {
  // return req.user;
  return 'hemo';
});

// use middlawares
app.use(cors());
app.use(express.static('build'));
app.use(express.json());  // this middlaware takes the JSON data of a request, transforms it into a JavaScript object and then attaches it to the body property of the request object before the route handler is called.
// app.use(middleware.getToken());
app.use(middleware.requestLogger);
app.use(middleware.userLogger);
app.use(morgan('dev'));

// use routers (controllers) to handle route events
app.use('/api/blogs', blogsRouter);

// handle unknown endpoint and errors
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;