export default function create(store) {
  const INTERVAL = 30 * 1000

  let intervalID

  function handler() {
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
