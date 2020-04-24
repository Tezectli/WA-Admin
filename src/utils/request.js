import axios from 'axios'
import { Message } from 'element-ui';
const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/devapi';
const service = axios.create({
    baseURL: BASEURL,
    timeout: 1000,
    // "content-type": "application/x-www-form-urlencoded"
    // headers: { 'X-Custom-Header': 'foobar' }
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

});

// 添加请求拦截器
service.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    let data = response.data
        // return data;
        // 业务需求

    if (data.resCode == 200 || data.resCode == 201) {
        Message.success(data.message);
        return response;

    } else {
        // Message.success(data.message);
        Message.error(data.message);
        // return response;
        return Promise.reject(data);
        // return Promise.resolve(data);
    }

}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 发送 POST 请求
// service.request({
//     method: "post",
//     url: "/getSms/",
//     data: {}
// });

export default service;