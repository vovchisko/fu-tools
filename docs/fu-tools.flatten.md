# flatten(array, depth = 1)

Flattens nested arrays to specified depth.

```javascript
import { flatten } from 'fu-tools'

flatten([1, [2, [3, 4]]])         // [1, 2, [3, 4]]
flatten([1, [2, [3, 4]]], 2)      // [1, 2, 3, 4]
flatten([1, [2, [3, 4]]], -1)     // [1, 2, 3, 4] (infinite depth)

// Throws error if maximum depth (1000) exceeded
```