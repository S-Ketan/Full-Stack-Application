import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL_API}/api`,
});

axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("AccessToken");
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
            localStorage.removeItem("AccessToken");
        }
        throw err;
    }
);

export default axiosClient;
