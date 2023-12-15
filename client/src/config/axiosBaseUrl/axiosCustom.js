import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_API_URL;
// let accessToken = Cookies.get("accessToken");
const instance = axios.create({
  baseURL: API_URL,
  // headers:{
  //   common: {
  //     'Authorization': accessToken ? `Bearer ${accessToken}` : ''
  //   }
  // }
});

// export default instance;

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;


