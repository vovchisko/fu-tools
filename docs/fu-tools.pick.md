# pick(data, keys)

Creates new object/array with only specified keys/indices.

```javascript
import { pick } from 'fu-tools'

// Objects
pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])  // { a: 1, c: 3 }

// Arrays
pick(['a', 'b', 'c'], [0, 2])  // ['a', 'c']

// Other types return unchanged
pick('string', [0, 1])  // 'string'
```