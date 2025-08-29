import { execute }       from 'test-a-bit'
import { isPlainObject } from '../../src/dash.js'

execute('dash - isPlainObject', (success, fail) => {

  // Test for plain objects
  if (!isPlainObject({ a: 1, b: 2 })) {
    return fail('Expected { a: 1, b: 2 } to be a plain object')
  }

  // Test for arrays (should return false)
  if (isPlainObject([ 1, 2, 3 ])) {
    return fail('Expected [1, 2, 3] not to be a plain object')
  }

  // Test for null (should return false)
  if (isPlainObject(null)) {
    return fail('Expected null not to be a plain object')
  }

  // Test for built-in objects (should return false)
  if (isPlainObject(new Date())) {
    return fail('Expected Date not to be a plain object')
  }
  if (isPlainObject(new RegExp('test'))) {
    return fail('Expected RegExp not to be a plain object')
  }
  if (isPlainObject(new Error('test'))) {
    return fail('Expected Error not to be a plain object')
  }

  // Test for Object.create(null) (should return true)
  if (!isPlainObject(Object.create(null))) {
    return fail('Expected Object.create(null) to be a plain object')
  }

  // Test for non-object types
  const nonObjects = [ 42, 'string', true, undefined, Symbol('test') ]
  for (const item of nonObjects) {
    if (isPlainObject(item)) {
      return fail(`Expected ${ item } not to be a plain object`)
    }
  }

  success('isPlainObject works correctly')
})
