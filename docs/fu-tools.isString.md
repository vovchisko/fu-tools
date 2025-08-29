# isString(value)

Checks if value is a string (primitive or object).

```javascript
import { isString } from 'fu-tools'

isString('hello')              // true
isString(new String('hello'))  // true
isString(123)                  // false
```