# isArray(value)

Checks if value is an array. Alias for `Array.isArray()`.

```javascript
import { isArray } from 'fu-tools'

isArray([])          // true
isArray([1, 2, 3])   // true
isArray({})          // false
isArray('array')     // false
```