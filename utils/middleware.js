/* middleware used to access and handle (request - response) cycle in application */
/* authentication - validation - request structer validation  */

const logger = require('./logger');
const morgan = require('morgan');

morgan.token('user', (request, response) => {
  // return req.user;
  return 'hemo';
});

// logging requests to console
const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method);
  logger.info('Path:  ', request.path);
  logger.info('Body:  ', request.body);
  logger.info('---');
  next();
};

// logging users to file
const userLogger = (request, response, next) => {
  morgan(':dev');
  next();
};

const addToken = (request, response, next) => {
  next();
};

// catching requests made to non-existent routes
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).json({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

module.exports = {
  requestLogger,
  userLogger,
  addToken,
  unknownEndpoint,
  errorHandler
};