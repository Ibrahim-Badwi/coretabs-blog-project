/* handle logging to console, file or external service */
const info = (...params) => {
  console.log(...params);
};

const error = (...params) => {
  console.log(...params);
};

module.exports = {
  info,
  error
};