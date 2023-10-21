import axios from 'axios';
import { baseURL } from '@/config';
import authHeader from "@/services/user.service";

const instance = axios.create({
    baseURL: baseURL,
});
instance.interceptors.request.use(config => {
    const token = authHeader();
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
});
export default instance;