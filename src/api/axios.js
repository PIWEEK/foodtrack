import axios from 'axios'

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000'
})

export default instance
