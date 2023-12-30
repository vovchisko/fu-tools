import { execute }     from 'test-a-bit'
import { generateOTC } from '../../src/utils.any.js'

execute('utils - generateOTC', (success, fail) => {

  // Test default charsets (num, hex, string)
  const defaultCharsets = {
    num: /^\d+$/,
    hex: /^[0-9a-f]+$/,
    string: /^[0-9a-z]+$/,
  }

  for (const [ charset, regex ] of Object.entries(defaultCharsets)) {
    const otc = generateOTC(6, charset)
    if (otc.length !== 6 || !regex.test(otc)) {
      return fail(`Default charset '${ charset }' failed`)
    }
  }

  // Test custom charset
  const customCharset = 'ABC123'
  const customOTC = generateOTC(5, customCharset)
  const customRegex = new RegExp(`^[${customCharset}]+$`)

  if (customOTC.length !== 5 || !customRegex.test(customOTC)) {
    return fail('Custom charset failed')
  }

  // All tests passed
  success('nice otc')
})
