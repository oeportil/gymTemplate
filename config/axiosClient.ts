import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const instance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 8000,
});

instance.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem("auth");

    if (token && JSON.parse(token).state.token) {
        config.headers = config.headers || {};
        config.headers["x-token"] = JSON.parse(token).state.token;
    }
    return config;
});

export default instance;
