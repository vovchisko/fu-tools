# sha256(string)

Generates SHA-256 hash from string.

**⚠️ Important**: Async in browser, sync in Node.js.

## Node.js
```javascript
import { sha256 } from 'fu-tools'

const hash = sha256('hello world')  // Synchronous
// 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9'
```

## Browser
```javascript
import { sha256 } from 'fu-tools'

const hash = await sha256('hello world')  // Asynchronous!
// 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9'
```