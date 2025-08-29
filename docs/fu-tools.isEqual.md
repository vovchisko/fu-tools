# isEqual(value1, value2)

Deep equality comparison for objects, arrays, Sets, and Maps.

```javascript
import { isEqual } from 'fu-tools'

isEqual({ a: 1 }, { a: 1 })                    // true
isEqual([1, [2, 3]], [1, [2, 3]])              // true
isEqual(new Set([1, 2]), new Set([1, 2]))      // true
isEqual({ a: 1 }, { a: 2 })                    // false
```