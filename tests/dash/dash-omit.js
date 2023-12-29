import { execute }       from 'test-a-bit'
import { isEqual, omit } from '../../src/dash.js'

execute('dash - omit', (success, fail) => {

  // Test for arrays
  const arr = [ 'a', 'b', 'c', 'd', 'e' ]
  const omittedArr = omit(arr, [ 0, 2, 4 ])
  const expectedArr = [ 'b', 'd' ]
  if (!isEqual(omittedArr, expectedArr)) {
    return fail(`Array: Expected ${ JSON.stringify(expectedArr) } but got ${ JSON.stringify(omittedArr) }`)
  }

  // Test for plain objects
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
  const omittedObj = omit(obj, [ 'a', 'c', 'e' ])
  const expectedObj = { b: 2, d: 4 }
  if (!isEqual(omittedObj, expectedObj)) {
    return fail(`Object: Expected ${ JSON.stringify(expectedObj) } but got ${ JSON.stringify(omittedObj) }`)
  }

  // Test for other data types (should return the original data)
  const str = 'hello'
  const omittedStr = omit(str, [ 0, 2, 4 ])
  if (omittedStr !== str) {
    return fail(`String: Expected "${ str }" but got "${ omittedStr }"`)
  }

  success(`omit works correctly`)
})
