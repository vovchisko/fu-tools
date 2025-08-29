# cloneDeep(value)

Creates deep copy of objects, arrays, Sets, and Maps. Handles nested structures.

```javascript
import { cloneDeep } from 'fu-tools'

const original = {
  obj: { nested: 'value' },
  arr: [1, { deep: 'item' }],
  set: new Set([{ a: 1 }]),
  map: new Map([['key', { b: 2 }]])
}

const copy = cloneDeep(original)
copy.obj.nested = 'changed'
// original.obj.nested is still 'value'
```