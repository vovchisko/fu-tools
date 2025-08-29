import { execute } from 'test-a-bit'
import { wait } from '../../src/utils.any.js'

execute('utils - wait', (success, fail) => {
  
  let testsCompleted = 0
  const totalTests = 5
  
  function checkComplete() {
    testsCompleted++
    if (testsCompleted === totalTests) {
      success('wait function handles all cases correctly')
    }
  }
  
  // Test 1: Basic wait functionality (50ms)
  const start1 = Date.now()
  wait(50).then(() => {
    const elapsed = Date.now() - start1
    if (elapsed < 40 || elapsed > 70) {
      return fail(`50ms wait took ${elapsed}ms, expected ~50ms`)
    }
    checkComplete()
  }).catch(error => fail(`50ms wait failed: ${error.message}`))
  
  // Test 2: Zero delay
  const start2 = Date.now()
  wait(0).then(() => {
    const elapsed = Date.now() - start2
    if (elapsed > 20) { // Should be very fast
      return fail(`wait(0) took ${elapsed}ms, expected <20ms`)
    }
    checkComplete()
  }).catch(error => fail(`wait(0) failed: ${error.message}`))
  
  // Test 3: No parameter (defaults to 0)
  const start3 = Date.now()
  wait().then(() => {
    const elapsed = Date.now() - start3
    if (elapsed > 20) {
      return fail(`wait() took ${elapsed}ms, expected <20ms`)
    }
    checkComplete()
  }).catch(error => fail(`wait() failed: ${error.message}`))
  
  // Test 4: Invalid string parameter (should work like wait(0))
  const start4 = Date.now()
  wait('invalid').then(() => {
    const elapsed = Date.now() - start4
    if (elapsed > 20) {
      return fail(`wait('invalid') took ${elapsed}ms, expected <20ms`)
    }
    checkComplete()
  }).catch(error => fail(`wait('invalid') failed: ${error.message}`))
  
  // Test 5: Negative number (should work like wait(0))
  const start5 = Date.now()
  wait(-100).then(() => {
    const elapsed = Date.now() - start5
    if (elapsed > 20) {
      return fail(`wait(-100) took ${elapsed}ms, expected <20ms`)
    }
    checkComplete()
  }).catch(error => fail(`wait(-100) failed: ${error.message}`))
})