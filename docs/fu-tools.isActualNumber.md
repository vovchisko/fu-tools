# isActualNumber(value)

Checks if value is a finite number (excludes NaN and Infinity).

```javascript
import { isActualNumber } from 'fu-tools'

isActualNumber(42)        // true
isActualNumber(-3.14)     // true
isActualNumber(NaN)       // false
isActualNumber(Infinity)  // false
isActualNumber('42')      // false
```