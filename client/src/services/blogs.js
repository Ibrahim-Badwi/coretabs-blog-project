import axios from 'axios';

const baseUrl = '/api/blogs';

const get = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const getAll = () => {
  // return axios.get(baseUrl);
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

export default { get, getAll };
