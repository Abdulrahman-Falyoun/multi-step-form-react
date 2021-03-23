

import axios from 'axios';

// import { axiosResponseSanitizerMiddleware } from '../utils/axios-response-sanitizer-middleware';
// axios.interceptors.response.use(axiosResponseSanitizerMiddleware)

export default axios.create({
  baseURL: `https://oda.sa/store/api/`,
  headers: {
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
});