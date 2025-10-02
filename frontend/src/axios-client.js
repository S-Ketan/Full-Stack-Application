import axios from "axios";

const axiosClient = axios.create({
    baseURL: `
http://127.0.0.1:8000/api`,
});

axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
    (res) => res.data,
    (err) => {
        if (err.response?.status === 401) {
            localStorage.removeItem("token");
        }
        throw err;
    }
);

export default axiosClient;
