# randomString(length = 16)

Generates cryptographically secure random hex string.

```javascript
import { randomString } from 'fu-tools'

randomString()    // 32 hex chars (16 bytes)
randomString(8)   // 16 hex chars (8 bytes) 
randomString(32)  // 64 hex chars (32 bytes)
```

Always returns `length * 2` hex characters (each byte = 2 hex chars).

Uses cryptographically secure random generators.