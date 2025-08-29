import { execute } from 'test-a-bit'

// Test both Node.js and browser implementations
let randomStringFunction
let testEnv

try {
  // Try Node.js version first
  const nodeUtils = await import('../../src/utils.node.js')
  randomStringFunction = nodeUtils.randomString
  testEnv = 'Node.js'
} catch (error) {
  try {
    // Fall back to browser version
    const browserUtils = await import('../../src/utils.browser.js')
    randomStringFunction = browserUtils.randomString
    testEnv = 'Browser'
  } catch (browserError) {
    console.error('Could not load randomString function from either environment')
    throw browserError
  }
}

execute(`utils - randomString (${testEnv})`, (success, fail) => {
  
  // Test default length (16)
  const result1 = randomStringFunction()
  if (result1.length !== 32) { // 16 bytes = 32 hex chars
    return fail(`Default length wrong: expected 32 chars, got ${result1.length}`)
  }
  if (!/^[a-f0-9]+$/.test(result1)) {
    return fail(`Default result not hex: ${result1}`)
  }

  // Test custom length
  const result2 = randomStringFunction(8)
  if (result2.length !== 16) { // 8 bytes = 16 hex chars
    return fail(`Custom length wrong: expected 16 chars, got ${result2.length}`)
  }
  if (!/^[a-f0-9]+$/.test(result2)) {
    return fail(`Custom length result not hex: ${result2}`)
  }

  // Test very small length
  const result3 = randomStringFunction(1)
  if (result3.length !== 2) { // 1 byte = 2 hex chars
    return fail(`Small length wrong: expected 2 chars, got ${result3.length}`)
  }

  // Test that multiple calls produce different results
  const result4 = randomStringFunction(16)
  const result5 = randomStringFunction(16)
  if (result4 === result5) {
    return fail('Two calls produced identical results (extremely unlikely)')
  }

  // Test zero length
  const result6 = randomStringFunction(0)
  if (result6.length !== 0) {
    return fail(`Zero length should produce empty string, got: ${result6}`)
  }

  success('randomString works correctly')
})