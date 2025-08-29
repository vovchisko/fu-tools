# omit(data, keys)

Creates new object/array without specified keys/indices.

```javascript
import { omit } from 'fu-tools'

// Objects
omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])  // { b: 2 }

// Arrays
omit(['a', 'b', 'c'], [0, 2])  // ['b']

// Other types return unchanged
omit('string', [0, 1])  // 'string'
```