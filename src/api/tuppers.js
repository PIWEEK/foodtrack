import Status from 'http-status-codes'
import axios from './axios'

export async function addTupper(tupper) {
  const response = await axios.post('/tuppers/', {
    tagId: tupper.tagId,
    tupperId: tupper.tupperId,
    name: tupper.name,
    content: tupper.content,
    servings: tupper.servings,
    cookedAt: tupper.cookedAt,
    storedAt: tupper.storedAt,
    notifyMeAt: tupper.notifyMeAt
  })
  if (response.status === Status.OK) {
    return response.data
  }
  console.log(response)
}

export async function list() {
  const response = await axios.get('/tuppers')
  return response.data
}

export default {
  addTupper,
  list
}

// console.log(response.data);
// console.log(response.status);
// console.log(response.statusText);
// console.log(response.headers);
// console.log(response.config);
