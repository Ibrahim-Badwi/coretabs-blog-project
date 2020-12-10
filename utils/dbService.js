/* mongodb service */
const mongoose = require('mongoose')
const logger = require('./logger');
const config = require('./config');


// setup for mongodb connection
function setup() {
  logger.info('connecting to', config.MONGODB_URI);

  mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }).then(() => {
    logger.info('connected to MongoDB');
  }).catch(error => {
    logger.error('error connecting to MongoDB:', error.message);
  });
}

module.exports = setup;