# isBoolean(value)

Checks if value is a boolean (primitive or object).

```javascript
import { isBoolean } from 'fu-tools'

isBoolean(true)               // true
isBoolean(new Boolean(true))  // true
isBoolean(1)                  // false
```