# extend(target, ...sources)

Deep merge objects with no reference sharing. Mutates target object.

```javascript
import { extend } from 'fu-tools'

const target = { a: { keep: 'this' } }
const source = { 
  a: { add: 'new' },
  b: { nested: { deep: 'value' } }
}

extend(target, source)
// target: { a: { keep: 'this', add: 'new' }, b: { nested: { deep: 'value' } } }

// No reference sharing - safe to mutate
target.b.nested.deep = 'changed'
// source.b.nested.deep is still 'value'
```