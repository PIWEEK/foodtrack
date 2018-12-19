import axios from 'axios'
import Status from 'http-status-codes'

export async function addTupper(tupper) {
  const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000'
  })
  const response = await instance.post('/tuppers/', {
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

export default {
  addTupper
}

// console.log(response.data);
// console.log(response.status);
// console.log(response.statusText);
// console.log(response.headers);
// console.log(response.config);
