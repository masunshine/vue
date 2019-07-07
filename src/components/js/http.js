import axios from 'axios'
const service = axios.create({
    baseURL: 'https://api.myjson.com/bins/',
    timeout: 8000,
    transformRequest: [function (data) {
        return data
    }],
    transformResponse: [function (data) {
        return data
    }],
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // 默认的
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // 默认的
    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: function (status) {
        return status >= 200 && status < 300 // 默认的
    }
})
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})
// 添加响应拦截器
service.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    return Promise.reject(error)
})
export default service
