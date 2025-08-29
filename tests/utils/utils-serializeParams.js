import { execute } from 'test-a-bit'
import { serializeParams } from '../../src/utils.any.js'

execute('utils - serializeParams', (success, fail) => {
  
  // Test basic serialization
  const result1 = serializeParams({ name: 'John', age: 30 })
  if (result1 !== 'name=John&age=30') {
    return fail(`Basic serialization failed: ${result1}`)
  }

  // Test empty object
  const result2 = serializeParams({})
  if (result2 !== '') {
    return fail(`Empty object should return empty string: ${result2}`)
  }

  // Test single parameter
  const result3 = serializeParams({ key: 'value' })
  if (result3 !== 'key=value') {
    return fail(`Single param failed: ${result3}`)
  }

  // Test special characters that need encoding
  const result4 = serializeParams({ 'special chars': 'hello world!@#$%' })
  const expected4 = 'special%20chars=hello%20world!%40%23%24%25'
  if (result4 !== expected4) {
    return fail(`URL encoding failed: ${result4} !== ${expected4}`)
  }

  // Test numbers and booleans
  const result5 = serializeParams({ num: 42, bool: true, str: 'test' })
  if (!result5.includes('num=42') || !result5.includes('bool=true') || !result5.includes('str=test')) {
    return fail(`Mixed types failed: ${result5}`)
  }

  success('serializeParams works correctly')
})