import axios from 'axios'

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://foodtrack-api.now.sh'
})

export default instance
