import axios from 'axios'


 var request = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});

request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


export default request