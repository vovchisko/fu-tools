import { execute } from 'test-a-bit'
import { get }     from '../../src/dash.js'

execute('dash - get', (success, fail) => {

  const obj = {
    a: {
      b: {
        c: 5,
      },
      d: [ 10, 20, 30 ],
    },
    e: 'hello',
  }

  // Testing nested property access
  if (get(obj, 'a.b.c') !== 5) {
    return fail(`Expected 5 but got ${ get(obj, 'a.b.c') }`)
  }

  // Testing array index access
  if (get(obj, 'a.d.1') !== 20) {
    return fail(`Expected 20 but got ${ get(obj, 'a.d.1') }`)
  }

  // Testing default value for non-existent property
  if (get(obj, 'a.b.e', 'default') !== 'default') {
    return fail(`Expected "default" but got ${ get(obj, 'a.b.e', 'default') }`)
  }

  // Testing with top level properties
  if (get(obj, 'e') !== 'hello') {
    return fail(`Expected "hello" but got ${ get(obj, 'e') }`)
  }

  success('get works correctly')
})
