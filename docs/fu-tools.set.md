# set(object, path, value)

Sets value at object path. Creates missing intermediate objects.

```javascript
import { set } from 'fu-tools'

const obj = {}

set(obj, 'a.b.c', 'value')
// obj: { a: { b: { c: 'value' } } }

set(obj, 'a.d.0', 'array item')
// obj: { a: { b: { c: 'value' }, d: ['array item'] } }
```