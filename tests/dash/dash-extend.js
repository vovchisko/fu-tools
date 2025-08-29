import { execute } from 'test-a-bit'
import { extend } from '../../src/dash.js'

execute('dash - extend', (success, fail) => {
  
  // Test basic extend functionality
  const target1 = { a: 1 }
  const source1 = { b: 2 }
  const result1 = extend(target1, source1)
  if (result1 !== target1 || result1.a !== 1 || result1.b !== 2) {
    return fail('Basic extend failed')
  }

  // Test multiple sources
  const target2 = { a: 1 }
  const result2 = extend(target2, { b: 2 }, { c: 3 })
  if (result2.a !== 1 || result2.b !== 2 || result2.c !== 3) {
    return fail('Multiple sources extend failed')
  }

  // Test property overwriting
  const target3 = { a: 1, b: 2 }
  const result3 = extend(target3, { b: 3, c: 4 })
  if (result3.a !== 1 || result3.b !== 3 || result3.c !== 4) {
    return fail('Property overwriting failed')
  }

  // Test null/undefined sources
  const target4 = { a: 1 }
  const result4 = extend(target4, null, undefined, { b: 2 })
  if (result4.a !== 1 || result4.b !== 2) {
    return fail('Null/undefined sources handling failed')
  }

  // Test error handling for invalid target
  try {
    extend(null, { a: 1 })
    return fail('Should throw error for null target')
  } catch (e) {
    if (e.message !== 'Target must be an object') {
      return fail('Wrong error message for null target')
    }
  }

  try {
    extend('string', { a: 1 })
    return fail('Should throw error for primitive target')
  } catch (e) {
    if (e.message !== 'Target must be an object') {
      return fail('Wrong error message for primitive target')
    }
  }

  // Test deep copying of nested objects
  const target5 = { 
    existing: { keep: 'this' },
    arr: [1, 2]
  }
  const source5 = { 
    nested: { obj: { deep: 'value' } },
    arr: [3, { inner: 'object' }],
    existing: { add: 'new property' }
  }
  const result5 = extend(target5, source5)

  // Verify no shared references for nested objects
  if (result5.nested.obj === source5.nested.obj) {
    return fail('Nested object shares reference with source')
  }
  if (result5.arr[1] === source5.arr[1]) {
    return fail('Array element object shares reference with source')
  }
  if (result5.existing === source5.existing) {
    return fail('Extended object shares reference with source')
  }

  // Verify deep values are copied correctly
  if (result5.nested.obj.deep !== 'value') {
    return fail('Deep nested value not copied correctly')
  }
  if (result5.arr[1].inner !== 'object') {
    return fail('Array nested object not copied correctly')
  }
  // Verify object extension (merge) works correctly
  if (result5.existing.keep !== 'this' || result5.existing.add !== 'new property') {
    return fail('Object extension not working correctly')
  }

  // Verify mutations don't affect original
  result5.nested.obj.deep = 'modified'
  result5.arr[1].inner = 'changed'
  if (source5.nested.obj.deep === 'modified' || source5.arr[1].inner === 'changed') {
    return fail('Mutations to result affected source objects')
  }

  success('extend works correctly with deep copying')
})