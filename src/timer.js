export default function create(store) {
  const INTERVAL = 60 * 1000

  let intervalID

  function handler() {
    console.log('intervalito')
    store.dispatch('timer')
  }

  function start() {
    intervalID = setInterval(handler, INTERVAL)
  }

  function stop() {
    clearInterval(intervalID)
  }

  return {
    start,
    stop
  }
}
