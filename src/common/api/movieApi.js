import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omdbapi.com',
});

export default api;
