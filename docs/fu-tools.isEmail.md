# isEmail(email)

Validates email address format using regex pattern.

```javascript
import { isEmail } from 'fu-tools'

isEmail('user@example.com')      // true
isEmail('user.name@domain.co')   // true
isEmail('hi+tag@site.dev')       // true
isEmail('invalid@')              // false
isEmail('no-domain')             // false
```

Pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`