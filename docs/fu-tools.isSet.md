# isSet(value)

Checks if value is a Set instance.

```javascript
import { isSet } from 'fu-tools'

isSet(new Set())      // true
isSet(new Set([1]))   // true
isSet([])             // false
```