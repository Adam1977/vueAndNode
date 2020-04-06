import axios from './interceptors'
import pathConfig from './config'

// let methods = ['get', 'post', 'put', 'delete']
let methods = ['post', 'put', 'delete']
class Api {
  constructor() {
    this.get = (path, params = {}) => new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: pathConfig[path],
        params: params,
        timeout: 10000,
        headers: {
          // 'X-Requested-With': 'XMLHttpRequest',
          "Content-Type": "application/json;charset=UTF-8",
          // "Cache-Control": "no-cache"
        }
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        console.log('error.response', error.response)
        console.log('error.request', error.request)
      })
    })
    methods.forEach(method => {
      this[method] = (path, data = {}) => new Promise((resolve, reject) => {
        axios({
          method: method,
          url: pathConfig[path],
          data: data,
          timeout: 10000,
          headers: {
            // 'X-Requested-With': 'XMLHttpRequest',
            "Content-Type": "application/json;charset=UTF-8",
            // "Cache-Control": "no-cache"
          }
        }).then(res => {
          resolve(res.data)
        }).catch(error => {
          console.log('error.response', error.response)
          console.log('error.request', error.request)
        })
      })
    })
  }
}
export default new Api()
