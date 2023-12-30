import { execute }            from 'test-a-bit'
import { cloneDeep, isEqual } from '../../src/dash.js'

execute('dash - cloneDeep', async (success, fail) => {
  // Previous tests...

  // Test for mixed structure
  const mixed = {
    number: 42,
    string: 'Hello, world!',
    array: [ 1, { a: 2 }, [ 3, 4 ], new Set([ 5, 6 ]) ],
    object: { b: 7, c: [ 8, 9 ], d: new Map([ [ 'e', 10 ], [ 'f', { g: 11 } ] ]) },
    set: new Set([ 12, [ 13, 14 ], { h: 15 }, new Map([ [ 'i', 16 ] ]) ]),
    map: new Map([
      [ 'j', 17 ],
      [ 'k', [ 18, 19 ] ],
      [ 'l', { m: 20 } ],
      [ 'n', new Set([ 21, 22 ]) ],
    ]),
  }
  const clonedMixed = cloneDeep(mixed)

  if (!isEqual(clonedMixed, mixed)) {
    console.log(mixed)
    console.log(clonedMixed)
    return fail('Failed to clone mixed structure')
  }

  if (clonedMixed === mixed)
    return fail('Mixed structure was not deep cloned')

  // Checking nested structures
  if (clonedMixed.array[1] === mixed.array[1])
    return fail('Mixed structure was not deep cloned (object in array)')

  if (clonedMixed.array[2] === mixed.array[2])
    return fail('Mixed structure was not deep cloned (array in array)')

  if (clonedMixed.array[3] === mixed.array[3])
    return fail('Mixed structure was not deep cloned (set in array)')

  if (clonedMixed.object.c === mixed.object.c)
    return fail('Mixed structure was not deep cloned (array in object)')

  if (clonedMixed.object.d === mixed.object.d)
    return fail('Mixed structure was not deep cloned (map in object)')

  if (Array.from(clonedMixed.object.d.values())[1] === Array.from(mixed.object.d.values())[1])
    return fail('Mixed structure was not deep cloned (object in map in object)')

  if (Array.from(clonedMixed.set)[1] === Array.from(mixed.set)[1])
    return fail('Mixed structure was not deep cloned (array in set)')

  if (Array.from(clonedMixed.set)[2] === Array.from(mixed.set)[2])
    return fail('Mixed structure was not deep cloned (object in set)')

  if (Array.from(clonedMixed.set)[3] === Array.from(mixed.set)[3])
    return fail('Mixed structure was not deep cloned (map in set)')

  if (Array.from(clonedMixed.map.values())[1] === Array.from(mixed.map.values())[1])
    return fail('Mixed structure was not deep cloned (array in map)')

  if (Array.from(clonedMixed.map.values())[2] === Array.from(mixed.map.values())[2])
    return fail('Mixed structure was not deep cloned (object in map)')

  if (Array.from(clonedMixed.map.values())[3] === Array.from(mixed.map.values())[3])
    return fail('Mixed structure was not deep cloned (set in map)')

  success('All tests passed')
})
