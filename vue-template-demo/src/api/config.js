const BASE_URL_API1 = process.env.API1
const BASE_URL_API2 = process.env.API2

export default {
  // 这里是接口1
  getInfo: BASE_URL_API1 + '/getInfo',
  // 这里是接口2
  postUser: BASE_URL_API2 + '/postUser'
}
