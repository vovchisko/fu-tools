import { auto_runner } from 'test-a-bit'

console.log('')
console.log('DASH:')
await auto_runner('./tests/dash').catch(console.error)

console.log('')
console.log('UTILS:')
await auto_runner('./tests/utils').catch(console.error)
