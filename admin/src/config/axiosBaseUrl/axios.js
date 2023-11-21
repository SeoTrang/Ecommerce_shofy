import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const instance = axios.create({
  baseURL: API_URL+'/admin', // Thay thế URL của bạn tại đây
});

export default instance;
