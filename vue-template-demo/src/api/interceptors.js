import axios from 'axios'
// import router from '../router/index'

//axios 默认值
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.Authorization = ''; // 请求头中带自定义值
// axios.defaults.withCredentials = true; //让ajax携带cookie

//http request 拦截器
axios.interceptors.request.use(config => {
  return config
})

//http response 拦截器
axios.interceptors.response.use(function(response) {
  return Promise.resolve(response)
})

export default axios
