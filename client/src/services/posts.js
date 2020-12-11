import axios from 'axios';

const baseUrl = '/api/blogs';

const get = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => {
    // console.log(response);
    return response.data;
  });
};

export default { get, getAll };
