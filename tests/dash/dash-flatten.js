import { execute }          from 'test-a-bit'
import { flatten, isEqual } from '../../src/dash.js'

execute('dash - flatten', async (success, fail) => {
  const input = [
    [ 1 ],
    [ 2 ],
    [ [ 3, 4, 5 ] ],
    [ [ 6, 7, [ 8, 9, 10 ] ] ],
  ]

  const expectations = new Map()

  expectations.set(undefined, [ 1, 2, [ 3, 4, 5 ], [ 6, 7, [ 8, 9, 10 ] ] ])
  expectations.set(1, [ 1, 2, [ 3, 4, 5 ], [ 6, 7, [ 8, 9, 10 ] ] ])
  expectations.set(2, [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9, 10 ] ])
  expectations.set(3, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
  expectations.set(Infinity, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])

  for (const [ depth, expects ] of expectations) {
    const res = flatten(input, depth)
    if (!isEqual(res, expects)) {
      fail('wrong: ' + JSON.stringify(expects))
    }
  }

  input.push(input) // create recursion
  try {
    flatten(input, Infinity)
    fail(`next line after flatten with recursion should not execute!`)
  } catch (err) {
    if (String(err) !== 'Error: Maximum flatten depth exceeded.') {
      fail(`Incorrect Max depth error: ${ err }`)
    }
  }

  success(`flatten correctly`)
})
