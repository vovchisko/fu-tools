import { execute } from 'test-a-bit'
import { isEqual } from '../../src/dash.js'

execute('dash - isEqual', async (success, fail) => {
  // Test for primitive values
  if (!isEqual(1, 1)) return fail('Failed on numbers')
  if (isEqual(1, 2)) return fail('Failed on different numbers')
  if (!isEqual('test', 'test')) return fail('Failed on strings')
  if (isEqual('test', 'nope')) return fail('Failed on different strings')

  // Test for arrays
  if (!isEqual([ 1, 2, 3 ], [ 1, 2, 3 ])) return fail('Failed on arrays')
  if (isEqual([ 1, 2, 3 ], [ 4, 5, 6 ])) return fail('Failed on different arrays')

  // Test for objects
  const obj1 = { a: 1, b: 2, c: 3 }
  const obj2 = { a: 1, b: 2, c: 3 }
  const obj3 = { a: 4, b: 5, c: 6 }
  if (!isEqual(obj1, obj2)) return fail('Failed on objects')
  if (isEqual(obj1, obj3)) return fail('Failed on different objects')

  // Test for nested structures
  const nested1 = { a: { b: { c: [ 1, 2, 3 ] } } }
  const nested2 = { a: { b: { c: [ 1, 2, 3 ] } } }
  const nested3 = { a: { b: { c: [ 4, 5, 6 ] } } }
  if (!isEqual(nested1, nested2)) return fail('Failed on nested structures')
  if (isEqual(nested1, nested3)) return fail('Failed on different nested structures')

  // Test for sets
  const set1 = new Set([ 1, 2, 3 ])
  const set2 = new Set([ 1, 2, 3 ])
  const set3 = new Set([ 4, 5, 6 ])
  if (!isEqual(set1, set2)) return fail('Failed on sets')
  if (isEqual(set1, set3)) return fail('Failed on different sets')

  // Test for maps
  const map1 = new Map([ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ])
  const map2 = new Map([ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ])
  const map3 = new Map([ [ 'a', 4 ], [ 'b', 5 ], [ 'c', 6 ] ])
  if (!isEqual(map1, map2)) return fail('Failed on maps')
  if (isEqual(map1, map3)) return fail('Failed on different maps')

  success('All tests passed')
})
