import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7116/api",

  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    return Promise.reject(err);
  }
);
export default axiosInstance;
