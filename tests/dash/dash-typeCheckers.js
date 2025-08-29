import { execute } from 'test-a-bit'
import { 
  isString, isBoolean, isNumber, isNaN, isNull, 
  isSet, isMap, isActualNumber 
} from '../../src/dash.js'

execute('dash - type checkers', (success, fail) => {
  
  // Test isString
  if (!isString('hello')) return fail('String literal not detected')
  if (!isString(new String('hello'))) return fail('String object not detected')
  if (isString(123)) return fail('Number incorrectly detected as string')
  if (isString(null)) return fail('Null incorrectly detected as string')

  // Test isBoolean  
  if (!isBoolean(true)) return fail('True not detected as boolean')
  if (!isBoolean(false)) return fail('False not detected as boolean')
  if (!isBoolean(new Boolean(true))) return fail('Boolean object not detected')
  if (isBoolean(1)) return fail('Number incorrectly detected as boolean')
  if (isBoolean('true')) return fail('String incorrectly detected as boolean')

  // Test isNumber
  if (!isNumber(42)) return fail('Integer not detected as number')
  if (!isNumber(3.14)) return fail('Float not detected as number')
  if (!isNumber(new Number(42))) return fail('Number object not detected')
  if (!isNumber(NaN)) return fail('NaN not detected as number type')
  if (isNumber('42')) return fail('String incorrectly detected as number')

  // Test isNaN
  if (!isNaN(NaN)) return fail('NaN not detected')
  if (isNaN(42)) return fail('Regular number incorrectly detected as NaN')
  if (isNaN('not a number')) return fail('String incorrectly detected as NaN')
  if (isNaN(undefined)) return fail('Undefined incorrectly detected as NaN')

  // Test isNull
  if (!isNull(null)) return fail('Null not detected')
  if (isNull(undefined)) return fail('Undefined incorrectly detected as null')
  if (isNull(0)) return fail('Zero incorrectly detected as null')
  if (isNull('')) return fail('Empty string incorrectly detected as null')

  // Test isSet
  if (!isSet(new Set())) return fail('Set not detected')
  if (!isSet(new Set([1, 2, 3]))) return fail('Populated Set not detected')
  if (isSet([])) return fail('Array incorrectly detected as Set')
  if (isSet({})) return fail('Object incorrectly detected as Set')

  // Test isMap
  if (!isMap(new Map())) return fail('Map not detected')
  if (!isMap(new Map([['key', 'value']]))) return fail('Populated Map not detected')
  if (isMap({})) return fail('Object incorrectly detected as Map')
  if (isMap([])) return fail('Array incorrectly detected as Map')

  // Test isActualNumber
  if (!isActualNumber(42)) return fail('Valid number not detected as actual number')
  if (!isActualNumber(3.14)) return fail('Valid float not detected as actual number')
  if (!isActualNumber(-5)) return fail('Negative number not detected as actual number')
  if (isActualNumber(NaN)) return fail('NaN incorrectly detected as actual number')
  if (isActualNumber('42')) return fail('String incorrectly detected as actual number')
  if (isActualNumber(Infinity)) return fail('Infinity incorrectly detected as actual number')

  success('All type checkers work correctly')
})