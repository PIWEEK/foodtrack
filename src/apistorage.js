import axios from 'axios'

export default {
  async addTupper(tupper) {
    const response = await axios.get('http://localhost:3000/fridges')
    const fridges = response.data
    const fridgeId = fridges[0]._id
    console.log(fridgeId)
  },
  getTupper(id) {
    return ''
  }
}
