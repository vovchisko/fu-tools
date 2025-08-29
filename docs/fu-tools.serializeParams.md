# serializeParams(params)

Converts object to URL query string with proper encoding.

```javascript
import { serializeParams } from 'fu-tools'

serializeParams({ name: 'John', age: 30 })
// 'name=John&age=30'

serializeParams({ 'special chars': 'hello world!@#$%' })
// 'special%20chars=hello%20world!%40%23%24%25'

serializeParams({ a: 1, b: true, c: 'test' })
// 'a=1&b=true&c=test'

serializeParams({})  // ''
```