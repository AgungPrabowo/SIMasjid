import axios from 'axios';
import {BASE_API} from 'react-native-dotenv';

// create an axios instance
const service = axios.create({
  baseURL: BASE_API,
  timeout: 15000,
});

service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default service;
