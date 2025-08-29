# shortId(rnd = 2)

Generates random hex-based ID. Each `rnd` unit adds 4 characters.

```javascript
import { shortId } from 'fu-tools'

shortId()     // '4f3a9b2c' (8 chars, rnd=2)
shortId(1)    // 'a1b2' (4 chars)
shortId(3)    // '4f3a9b2c8d7e' (12 chars)

// Always produces hex characters (0-9, a-f)
```

Uses Math.random (not cryptographically secure).