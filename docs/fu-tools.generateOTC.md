# generateOTC(len = 6, charset = 'num')

Generates one-time codes with configurable length and character set.

```javascript
import { generateOTC } from 'fu-tools'

// Predefined charsets
generateOTC(6, 'num')     // '123456' (0-9)
generateOTC(6, 'hex')     // 'a1b2c3' (0-9, a-f)
generateOTC(6, 'string')  // 'x7k2m9' (0-9, a-z)

// Custom charset
generateOTC(8, 'ABCDEF123')  // 'A3B1F2E1'

// Default is 6-digit numeric
generateOTC()  // '847392'
```