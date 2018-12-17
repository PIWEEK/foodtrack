const MIME_TYPE = 'text/foodtrack'

const callbacks = new Map()

function handleMimeType(e) {
  console.log('mimetype', e)
}

function handleTagDiscovered(e) {
  console.log('tagDiscovered', e)
}

function handleNdef(e) {
  console.log('ndef', e)
  // nfc.connect('android.nfc.tech.Ndef')
  write([
    ndef.mimeMediaRecord(MIME_TYPE, nfc.stringToBytes('Hello, World!'))
  ])
    .then(() => console.log('Written'))
    .catch(() => console.log('Not written'))
}

function handleNdefFormatable(e) {
  console.log('ndef formatable', e)
}

/**
 * Devuelve una promesa que se resolverá correctamente si el NFC
 * está habilitado o que fallará devolviendo una cadena de texto
 * que puede ser NO_NFC en el caso de que el móvil no tenga NFC
 * o NFC_DISABLED en el caso de que el móvil tenga NFC pero que
 * esté desactivado.
 * @returns {Promise<void|String>}
 */
export function isEnabled() {
  return new Promise((resolve, reject) => {
    return nfc.enabled(resolve, reject)
  })
}

export function on(type, callback) {
  callbacks.set(type, callback)
}

export function off(type) {
  callbacks.delete(type)
}

export function start() {
  nfc.addNdefListener(handleNdef)
  nfc.addNdefFormatableListener(handleNdefFormatable)
  nfc.addTagDiscoveredListener(handleTagDiscovered)
  nfc.addMimeTypeListener(MIME_TYPE, handleMimeType)
}

export function stop() {
  nfc.removeNdefListener(handleNdef)
  nfc.removeNdefFormatableListener(handleNdefFormatable)
  nfc.removeTagDiscoveredListener(handleTagDiscovered)
}

export function write(message) {
  return new Promise((resolve, reject) => {
    nfc.write(message, resolve, reject)
  })
}

export default {
  isEnabled,
  on,
  off,
  start,
  stop,
  write
}
