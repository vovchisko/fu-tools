import { execute }      from 'test-a-bit'
import { isEqual, set } from '../../src/dash.js'

execute('dash - set', async (success, fail) => {
  const obj = { a: { b: { c: 10 } } }

  set(obj, 'a.b.c', 20)
  if (obj.a.b.c !== 20) {
    return fail(`Failed to set existing property: ${ JSON.stringify(obj) }`)
  }

  set(obj, 'a.b.d', 30)
  if (obj.a.b.d !== 30) {
    return fail(`Failed to add new property: ${ JSON.stringify(obj) }`)
  }

  set(obj, 'a.b.e.f', 40)
  if (obj.a.b.e.f !== 40) {
    return fail(`Failed to set deep property: ${ JSON.stringify(obj) }`)
  }

  set(obj, 'a.d', []) // TODO: won't create array automatically.
  set(obj, 'a.d.1', 50)
  if (!isEqual(obj.a.d, [ , 50 ])) {
    return fail(`Failed to set array value: ${ JSON.stringify(obj) }`)
  }

  success(`set function works correctly (TODO inside!)`)
})
