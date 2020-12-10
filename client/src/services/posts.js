import axios from 'axios';

const baseUrl = "/api/posts";

const get = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

export default { get, getAll }
