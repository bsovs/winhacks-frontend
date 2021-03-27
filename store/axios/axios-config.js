import axios from 'axios';
import { dev } from '../../config';
import { AsyncStorage } from 'react-native';

const url = dev ? 'http://localhost:8080': 'https://winhacks-service.herokuapp.com';

axios.defaults.baseURL = url+'/api';

axios.interceptors.request.use(async function (config) {
    const token = await AsyncStorage.getItem('token');
    config.headers.Authorization =  config.headers.Authorization || (token ? `Bearer ${token}` : 'Bearer ');
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default axios;