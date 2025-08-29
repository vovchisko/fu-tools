import { execute } from 'test-a-bit'

// Test both Node.js and browser implementations
let sha256Function
let testEnv

try {
  // Try Node.js version first
  const nodeUtils = await import('../../src/utils.node.js')
  sha256Function = nodeUtils.sha256
  testEnv = 'Node.js'
} catch (error) {
  try {
    // Fall back to browser version
    const browserUtils = await import('../../src/utils.browser.js')
    sha256Function = browserUtils.sha256
    testEnv = 'Browser'
  } catch (browserError) {
    console.error('Could not load sha256 function from either environment')
    throw browserError
  }
}

execute(`utils - sha256 (${testEnv})`, (success, fail) => {
  
  // Test basic hashing
  const testString = 'hello world'
  const expectedHash = 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9'
  
  const hashPromise = sha256Function(testString)
  
  // Handle both sync and async results
  Promise.resolve(hashPromise).then(result => {
    if (result !== expectedHash) {
      return fail(`Hash mismatch: got ${result}, expected ${expectedHash}`)
    }

    // Test empty string
    return Promise.resolve(sha256Function(''))
  }).then(emptyResult => {
    const expectedEmpty = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
    if (emptyResult !== expectedEmpty) {
      return fail(`Empty string hash mismatch: got ${emptyResult}`)
    }

    // Test unicode string
    return Promise.resolve(sha256Function('Hello 世界! 🌍'))
  }).then(unicodeResult => {
    // Just verify it produces a valid 64-character hex string
    if (!/^[a-f0-9]{64}$/.test(unicodeResult)) {
      return fail(`Unicode hash not valid hex: ${unicodeResult}`)
    }

    success('sha256 works correctly')
  }).catch(error => {
    fail(`sha256 test failed: ${error.message}`)
  })
})