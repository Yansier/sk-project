import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/admin/router/index.js'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL
})
service.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.authorization = `Bearer ${token}`
  return config
})

service.interceptors.response.use(response => {
  if (response.data.code && response.data.code !== 200) {
    if (response.data.code === 401) {
      router.replace('/login')
    }
    ElMessage.error(response.data.msg)

    return Promise.reject(response.data)
  }
  return response.data
}, error => {
  if (error.message) {
    ElMessage.error(error.message)
  }
  return Promise.reject(error.response.data)
})

export default service
