import axios from 'axios'
import Status from 'http-status-codes'

export async function login(email, password) {
  const response = await axios.post('http://localhost:3000/auth', {
    email,
    password
  })
  if (response.status === Status.CREATED) {
    return response.data.token
  }
  throw new Error('Invalid credentials')
}

export default {
  login
}
