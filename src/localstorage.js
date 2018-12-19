export default {
  addTupper(tupper) {
    const tuppers = localStorage.getItem('tuppers')
      ? JSON.parse(localStorage.getItem('tuppers'))
      : {}
    tuppers[tupper.id] = tupper
    localStorage.setItem('tuppers', JSON.stringify(tuppers))
  }
  // guarda() {
  //   const tuppers = {
  //     'id1': { 'name': 'albóndigas', 'id': 'id1', 'location': 'nevera' },
  //     'id2': { 'name': 'lentejas', 'id': 'id2', 'location': 'congelador' }
  //   }
  //   localStorage.setItem('tuppers', JSON.stringify(tuppers))
  // },
  // lee() {
  //   console.log(JSON.parse(localStorage.getItem('tuppers')))
  // },
  // leeId(id) {
  //   const tuppers = JSON.parse(localStorage.getItem('tuppers'))
  //   if (id in tuppers) {
  //     console.log(tuppers[id])
  //   } else {
  //     console.log('No encontrado')
  //   }
  // }
}
