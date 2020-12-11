/* entry point for backend - only imports the actual application and then starts it */
require('dotenv').config(); // This ensures that the environment variables from the .env file are available globally before the code from the other modules is imported.
const app = require('./app');
const http = require('http');
const config = require('./utils/config');
const logger = require('./utils/logger');

// use express as http request handler
const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server runing on port ${config.PORT}`);
});
