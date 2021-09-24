import axios from "axios";
import qs from "qs";
import { USER_INFO } from "constants/index";
const AxiosClient = axios.create({
    baseURL: "https://phanolink.herokuapp.com/api",
    headers: {
        "content-type": "application/json",
    },
    // tu cau hinh cach lay params mac dinh cua axios
    // bo qua gia tri null va undefined trong params
    paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
});
AxiosClient.interceptors.request.use(
    (config) => {
        // su ly config trc khi dua len server
        // them authorization
        const userInfo = localStorage.getItem(USER_INFO);
        if (userInfo) {
            const { accessToken } = JSON.parse(userInfo);
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        // xu ly request loi
        return Promise.reject(error);
    }
);
AxiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.status === 401) {
            // xu ly logout: clear localStorage , day nguoi dung ve trang login
        }
        if (error.status === 500) {
            // xu ly thong bao cho nguoi dung server bi loi
        }
        return Promise.reject(error);
    }
);
export { AxiosClient };
