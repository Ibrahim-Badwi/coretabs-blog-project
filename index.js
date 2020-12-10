/* entry point for backend */
const http = require('http');
const app = require('./app');
const config = require('./utils/config');
const logger = require('./utils/logger');

// use express as http request handler
const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server runing on port ${config.PORT}`);
});
