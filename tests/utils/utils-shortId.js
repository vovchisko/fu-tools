import { execute } from 'test-a-bit'
import { shortId } from '../../src/utils.any.js'

execute('utils - shortId', (success, fail) => {

  // Test length
  const rnd1 = 2
  const id1 = shortId(rnd1)
  if (id1.length !== rnd1 * 4) {
    return fail(`Length check failed for rnd=${ rnd1 }`)
  }

  // Test format (hexadecimal)
  const hexRegex = /^[0-9a-f]+$/
  if (!hexRegex.test(id1)) {
    return fail(`Format check failed: ${ id1 }`)
  }

  // Test for different outputs
  const id2 = shortId(rnd1)
  if (id1 === id2) {
    return fail(`Randomness check failed: ${ id1 } vs ${ id2 }`)
  }

  // All tests passed
  success('nice random id')
})
