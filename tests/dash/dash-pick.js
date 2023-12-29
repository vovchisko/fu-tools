import { execute }       from 'test-a-bit'
import { isEqual, pick } from '../../src/dash.js'

execute('dash - pick', (success, fail) => {

  // Test for arrays
  const arr = [ 'a', 'b', 'c', 'd', 'e' ]
  const pickedArr = pick(arr, [ 0, 2, 4 ])
  const expectedArr = [ 'a', 'c', 'e' ]
  if (!isEqual(pickedArr, expectedArr)) {
    return fail(`Array: Expected ${ JSON.stringify(expectedArr) } but got ${ JSON.stringify(pickedArr) }`)
  }

  // Test for plain objects
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
  const pickedObj = pick(obj, [ 'a', 'c', 'e' ])
  const expectedObj = { a: 1, c: 3, e: 5 }
  if (!isEqual(pickedObj, expectedObj)) {
    return fail(`Object: Expected ${ JSON.stringify(expectedObj) } but got ${ JSON.stringify(pickedObj) }`)
  }

  // Test for other data types (which should just return the original data)
  const str = 'hello'
  const pickedStr = pick(str, [ 0, 2, 4 ])
  if (pickedStr !== str) {
    return fail(`String: Expected "${ str }" but got "${ pickedStr }"`)
  }

  success(`pick works correctly`)
})
