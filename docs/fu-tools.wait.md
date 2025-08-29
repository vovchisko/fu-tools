# wait(ms = 0)

Promise-based delay function.

```javascript
import { wait } from 'fu-tools'

// Basic usage
await wait(1000)  // Wait 1 second

// Edge cases (all work)
await wait()          // Immediate resolution (0ms)
await wait(0)         // Immediate resolution
await wait('invalid') // Immediate resolution (NaN → 0)
await wait(-100)      // Immediate resolution (negative → 0)
```
