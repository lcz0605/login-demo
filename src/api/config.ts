import axios from 'axios'
const service = axios.create({
  timeout: 3000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = {
      status: 200,
      data: undefined
    }
    res.status = response.status
    res.data = response.data
    return res
  },
  error => {
    console.log(error)
  }
)

export default service
