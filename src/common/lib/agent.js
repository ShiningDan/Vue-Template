import axios from 'axios'

const agent = axios.create({
  // 目前写死为 localhost，用上云主机后，需要动态设置
  baseURL: 'http://localhost:7001',
  withCredientials: true,
})

agent.interceptors.response.use(
  async resp => {
    const data = resp.data
    // data.status === 0 为后端正确返回时约定好的表示正常返回的数值
    if (data && data.status === 0) {
      return data.data
    } else {
      throw data
    }
  },
  async err => {
    const resp = err.response
    // 对于以后需要用户登录的时候，设置的接口，目前保留，不做逻辑处理
    if (resp && resp.status === 401) {
      throw err
    } else {
      throw err
    }
  },
)

export default agent
