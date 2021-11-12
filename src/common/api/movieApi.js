import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omdbapi.com',
});

api.interceptors.request.use((config) => {
  config.url = `?s=${config.url}&apikey=${import.meta.env.VITE_API_KEY}`;
  return config;
});

export default api;
