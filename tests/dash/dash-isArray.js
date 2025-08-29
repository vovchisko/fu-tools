import { execute } from 'test-a-bit'
import { isArray } from '../../src/dash.js'

execute('dash - isArray', (success, fail) => {
  
  // Test arrays
  if (!isArray([])) return fail('Empty array not detected')
  if (!isArray([1, 2, 3])) return fail('Number array not detected')
  if (!isArray(['a', 'b'])) return fail('String array not detected')
  if (!isArray([null, undefined])) return fail('Mixed array not detected')

  // Test non-arrays
  if (isArray({})) return fail('Object incorrectly detected as array')
  if (isArray('string')) return fail('String incorrectly detected as array')
  if (isArray(123)) return fail('Number incorrectly detected as array')
  if (isArray(null)) return fail('Null incorrectly detected as array')
  if (isArray(undefined)) return fail('Undefined incorrectly detected as array')
  if (isArray(new Set())) return fail('Set incorrectly detected as array')
  if (isArray(new Map())) return fail('Map incorrectly detected as array')

  success('isArray works correctly')
})