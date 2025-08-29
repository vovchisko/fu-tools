# isPlainObject(value)

Checks if value is a plain object (regular objects, custom class instances, but not built-ins).

```javascript
import { isPlainObject } from 'fu-tools'

// Plain objects (true)
isPlainObject({})                    // true
isPlainObject({ a: 1 })              // true
isPlainObject(Object.create(null))   // true

// Custom class instances (true) - great for database models
class User { constructor() { this.id = 1 } }
isPlainObject(new User())            // true

// Built-ins (false)
isPlainObject(new Date())            // false
isPlainObject([])                    // false
isPlainObject(new RegExp('test'))    // false
isPlainObject(new Set())             // false

// Primitives (false)
isPlainObject(null)                  // false
isPlainObject('string')              // false
```