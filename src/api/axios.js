import axios from 'axios'

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://10.8.1.160:3000'
})

export default instance
