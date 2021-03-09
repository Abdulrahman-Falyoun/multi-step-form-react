

import axios from 'axios';

// import { axiosResponseSanitizerMiddleware } from '../utils/axios-response-sanitizer-middleware';
// axios.interceptors.response.use(axiosResponseSanitizerMiddleware)

export default axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
});