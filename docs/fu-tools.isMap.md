# isMap(value)

Checks if value is a Map instance.

```javascript
import { isMap } from 'fu-tools'

isMap(new Map())                    // true
isMap(new Map([['a', 1]]))          // true
isMap({})                           // false
```