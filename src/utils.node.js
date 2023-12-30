import crypto from 'crypto';

/**
 * Generate SHA-256 hash from string.
 * @param string
 * @return {string}
 */
export function sha256(string) {
  return crypto.createHash('sha256').update(string).digest('hex');
}


/**
 * Generate random hex-o-string
 * @param {number} length - The desired length of the output string.
 * @returns {string} - The generated ID string.
 */
export function randomString (length = 16) {
  return crypto.randomBytes(length).toString('hex')
}
