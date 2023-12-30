/**
 * Check if email is valid
 *
 * @param email
 * @return {boolean}
 */
export function isEmail (email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

/**
 * Wait for {delay} milliseconds
 * @param {Number} ms delay in milliseconds
 * @returns {Promise<*>}
 */
export function wait (ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms))
}


/**
 * Generate random ID-like based on Math.random(). Each piece add 4 random characters.
 *
 * @param rnd
 * @return {string}
 */
export function shortId (rnd = 2) {
  const maxVal = 46656
  const pad = '0000'
  let id = ''

  for (let i = 0; i < rnd; i++) {
    id += (pad + ((Math.random() * maxVal) | 0).toString(16)).slice(-4)
  }

  return id
}


const OTC_CHARSETS = Object.freeze({
  num: '0123456789',
  hex: '0123456789abcdef',
  string: '0123456789abcdefghijklmnopqrstuvwxyz',
})

/**
 *
 * @param {number} len length of OTC
 * @param {'num'|'hex'|'string'|string} charset of code (numbers,hex, 0-9 & a-z string, or custom charset string)
 * @return {string}
 */
export function generateOTC (len = 6, charset = 'num') {
  charset = OTC_CHARSETS[charset] || charset
  const charSetLength = charset.length
  let otc = ''

  for (let i = 0; i < len; i++) {
    otc += charset[Math.floor(Math.random() * charSetLength)]
  }

  return otc
}


/**
 * Serialize an object into a URL query string.
 * @param {object} params
 * @return {string}
 */
export function serializeParams (params) {
  return Object.entries(params)
      .map(([ key, value ]) => `${ encodeURIComponent(key) }=${ encodeURIComponent(value) }`)
      .join('&')
}
