import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  return config;
});

request.interceptors.response.use(
  (r) => r.data,
  (e) => {
    ElMessage.error("Oops, this is a error message.");
    return Promise.reject(e);
  },
);

export default request;
