/**
 * Generate SHA-256 hash from string.
 * @param string
 * @return {Promise<string>}
 */
export async function sha256 (string) {
  const utf8 = new TextEncoder().encode(string)
  const hashBuffer = await crypto.subtle.digest('SHA-256', utf8)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('')
}


/**
 * Generate random hex-o-string
 * @param {number} length - The desired length of the output string.
 * @returns {string} - The generated ID string.
 */
export function randomString(length = 16) {
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);
  return Array.from(array, byte => ('0' + byte.toString(16)).slice(-2)).join('');
}
