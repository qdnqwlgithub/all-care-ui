import axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/store/modules/user";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  let userStore = useUserStore();
  if (userStore.token) {
    config.headers.token = userStore.token;
  }
  return config;
});

request.interceptors.response.use(
  (r) => {
    let { data } = r;
    let { code } = data;
    if (code != 200) {
      return Promise.reject(data);
    }
    return Promise.resolve(data);
  },
  (e) => {
    ElMessage.error("Oops, this is a error message.");
    return Promise.reject(e);
  },
);

export default request;
