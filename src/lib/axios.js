import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

axiosInstance.interceptors.response.use(
  function (response) {
    // Do something before request is sent
    return response.data
  },
  function (error) {
    console.log(error)
    return Promise.reject(error)
  }
)

export default axiosInstance
