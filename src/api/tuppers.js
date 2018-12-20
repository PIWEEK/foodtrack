import Status from 'http-status-codes'
import axios from './axios'

export async function create(tupper) {
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

export async function eatServing(tupper, servings) {
  const response = await axios.put(`/tuppers/${tupper._id}`, {
    servings: -servings
  })
  return response.data
}

export async function eatWhole(tupper) {
  const response = await axios.put(`/tuppers/${tupper._id}`, {
    servings: 0
  })
  return response.data
}

export async function move(tupper, storedAt) {
  const response = await axios.put(`/tuppers/${tupper._id}`, {
    storedAt
  })
  return response.data
}

export async function remove(tupper) {
  const response = await axios.delete(`/tuppers/${tupper._id}`)
  return response.data
}

export default {
  create,
  list,
  eatServing,
  eatWhole,
  move,
  remove
}

// console.log(response.data);
// console.log(response.status);
// console.log(response.statusText);
// console.log(response.headers);
// console.log(response.config);
