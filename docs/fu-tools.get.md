# get(object, path, defaultValue)

Gets value at object path. Uses dot notation for nested properties.

```javascript
import { get } from 'fu-tools'

const obj = {
  a: {
    b: { c: 'value' },
    d: [10, 20, 30]
  }
}

get(obj, 'a.b.c')        // 'value'
get(obj, 'a.d.1')        // 20
get(obj, 'a.b.missing', 'default')  // 'default'
get(obj, 'invalid.path') // undefined
```