import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_API_URL;
const instance = axios.create({
  baseURL: API_URL, // Thay thế URL của bạn tại đây
});

// Add a request interceptor
// Hàm để thêm cấu hình header
const addAuthorizationHeader = () => {
  let accessToken = Cookies.get("accessToken");
  if(!accessToken) return;
  return instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  // instance.defaults.headers.common['Another-Header'] = 'Another-Value';
};

addAuthorizationHeader();

export default instance;
