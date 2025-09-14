import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.BASE_URL_API}/api`,
});

axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);
axiosClient.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (err) => {
        if (err.response?.status === 401) {
            localStorage.removeItem("token");
        }
        throw err;
    }
);

export default axiosClient;
