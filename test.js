import { auto_runner } from 'test-a-bit'

await auto_runner('./tests/dash').catch(console.error)
