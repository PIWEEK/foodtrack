import axios from './axios'
import Status from 'http-status-codes'

export async function register(name, email, password) {
  const response = await axios.post('/users', {
    name,
    email,
    password
  })
  if (response.status === Status.CREATED) {
    return response.data
  }
  console.log(response)
}

export default {
  register
}
