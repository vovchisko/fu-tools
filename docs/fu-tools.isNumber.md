# isNumber(value)

Checks if value is a number (primitive or object), including NaN.

```javascript
import { isNumber } from 'fu-tools'

isNumber(42)               // true
isNumber(NaN)              // true
isNumber(new Number(42))   // true
isNumber('42')             // false
```