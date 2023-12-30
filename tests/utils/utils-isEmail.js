import { execute } from 'test-a-bit'
import { isEmail } from '../../src/utils.any.js'

execute('utils - isEmail', (success, fail) => {

  // Valid email addresses
  const validEmails = [
    'test@example.com',
    'user.name@domain.co',
    'user_name@domain.co',
    'username.name123@gmail.com',
    'hi@vovchisko.dev',
    'hi+1@vovchisko.dev',
    'hi+a@vovchisko.dev',
  ]

  for (const email of validEmails) {
    if (!isEmail(email)) {
      return fail(`Valid email failed: ${ email }`)
    }
  }

  // Invalid email addresses
  const invalidEmails = [
    'test',
    'test@.com',
    '@nohost',
    'test@domain',
    'domain.com',
  ]
  for (const email of invalidEmails) {
    if (isEmail(email)) {
      return fail(`Invalid email passed: ${ email }`)
    }
  }

  // All tests passed
  success('all checks ok')
})
