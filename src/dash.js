export function isPlainObject (value) {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const prototype = Object.getPrototypeOf(value)
  
  // Plain objects: {} and Object.create(null)
  if (prototype === null || prototype === Object.prototype) {
    return true
  }

  // Check if it's a built-in constructor (Date, RegExp, Error, etc.)
  const constructor = prototype.constructor
  if (constructor && constructor.name && 
      (constructor === Date || constructor === RegExp || constructor === Error ||
       constructor === Array || constructor === Set || constructor === Map ||
       constructor === Promise || constructor === Function)) {
    return false
  }

  // Custom class instances are considered plain objects
  return true
}

export function isArray (value) {
  return Array.isArray(value)
}

export function isString (value) {
  return typeof value === 'string' || value instanceof String
}

export function isBoolean (value) {
  return typeof value === 'boolean' || value instanceof Boolean
}

export function isNumber (value) {
  return typeof value === 'number' || value instanceof Number
}

export function isNaN (value) {
  return Number.isNaN(value)
}

export function isNull (value) {
  return value === null
}

export function isSet (value) {
  return value instanceof Set
}

export function isMap (value) {
  return value instanceof Map
}

export function isActualNumber (value) {
  return isNumber(value) && !isNaN(value) && isFinite(value)
}

export function cloneDeep (value) {
  if (isPlainObject(value)) {
    const clonedObject = {}
    for (const key in value) {
      clonedObject[key] = cloneDeep(value[key])
    }
    return clonedObject
  } else if (isArray(value)) {
    return value.map(cloneDeep)
  } else if (isSet(value)) {
    const clonedSet = new Set()
    value.forEach((item) => clonedSet.add(cloneDeep(item)))
    return clonedSet
  } else if (isMap(value)) {
    const clonedMap = new Map()
    value.forEach((item, key) => clonedMap.set(key, cloneDeep(item)))
    return clonedMap
  } else {
    return value
  }
}

export function isEqual (value1, value2) {
  // Check strict equality for primitive types and non-object values
  if (value1 === value2) {
    return true
  }

  if (typeof value1 !== 'object' || value1 === null || typeof value2 !== 'object' || value2 === null) {
    return false
  }

  if (Object.getPrototypeOf(value1) !== Object.getPrototypeOf(value2)) {
    return false
  }

  // Check if both values are objects
  if (isPlainObject(value1) && isPlainObject(value2)) {
    const keys1 = Object.keys(value1)
    const keys2 = Object.keys(value2)

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
      return false
    }

    // Check deep equality for each key-value pair
    for (const key of keys1) {
      if (!keys2.includes(key) || !isEqual(value1[key], value2[key])) {
        return false
      }
    }

    return true
  }

  // Check deep equality for arrays
  if (isArray(value1) && isArray(value2)) {
    if (value1.length !== value2.length) {
      return false
    }

    for (let i = 0; i < value1.length; i++) {
      if (!isEqual(value1[i], value2[i])) {
        return false
      }
    }

    return true
  }

  // Check deep equality for sets
  if (isSet(value1) && isSet(value2)) {
    if (value1.size !== value2.size) {
      return false
    }

    const arr1 = Array.from(value1)
    const arr2 = Array.from(value2)

    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.some(item => isEqual(item, arr1[i]))) {
        return false
      }
    }

    return true
  }

  // Check deep equality for maps
  if (isMap(value1) && isMap(value2)) {
    if (value1.size !== value2.size) {
      return false
    }

    for (const [ key, val ] of value1.entries()) {
      if (!value2.has(key) || !isEqual(val, value2.get(key))) {
        return false
      }
    }

    return true
  }

  // In all other cases, values are not equal
  return false
}

export function get (obj, path, defaultValue) {
  const keys = String(path).split('.')
  let value = obj

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key]
    } else {
      return defaultValue
    }
  }

  return value
}

export function set (obj, path, value) {
  const keys = String(path).split('.')
  const lastKey = keys.pop()
  let target = obj

  for (const key of keys) {
    if (!target[key] || typeof target[key] !== 'object' || isArray(target[key])) {
      target[key] = isArray(target[key]) ? [] : {}
    }
    target = target[key]
  }

  target[lastKey] = value
}

export function flatten (array, depth = 1) {
  if (!Array.isArray(array)) {
    throw new Error('The "array" parameter must be an array.')
  }

  const maxDepth = depth === -1 ? Infinity : depth
  const flattened = []
  const stack = [ { array, depth: 0 } ]

  while (stack.length) {
    const { array, depth } = stack.shift()

    if (depth >= 1000) {
      // tail-recursive function will be slower, and will throw error if callstack stack overflows.
      // so we throw error here as well, as safety measure in the infinite loop
      throw new Error('Maximum flatten depth exceeded.')
    }

    for (let i = 0; i < array.length; i++) {
      const item = array[i]

      if (Array.isArray(item) && depth < maxDepth) {
        stack.push({ array: item, depth: depth + 1 })
      } else {
        flattened.push(item)
      }
    }
  }

  return flattened
}

export function omit (data, keys) {
  if (isArray(data)) {
    return data.filter((_, index) => !keys.includes(index))
  }

  if (isPlainObject(data)) {
    const result = {}

    for (const key in data) {
      if (!keys.includes(key)) {
        result[key] = data[key]
      }
    }

    return result
  }

  return data
}

export function pick (data, keys) {
  if (isArray(data)) {
    return data.filter((_, index) => keys.includes(index))
  }

  if (isPlainObject(data)) {
    const result = {}

    for (const key in data) {
      if (keys.includes(key)) {
        result[key] = data[key]
      }
    }

    return result
  }

  return data
}

export function extend(target, ...sources) {
  if (!target || typeof target !== 'object') {
    throw new Error('Target must be an object')
  }

  for (const source of sources) {
    if (!source || typeof source !== 'object') continue

    for (const [key, value] of Object.entries(source)) {
      if (isPlainObject(value)) {
        target[key] = extend(
          isPlainObject(target[key]) ? target[key] : {},
          value
        )
      } else if (isArray(value)) {
        target[key] = value.map(item => 
          isPlainObject(item) ? extend({}, item) :
          isArray(item) ? item.map(subItem => 
            isPlainObject(subItem) ? extend({}, subItem) : subItem
          ) : item
        )
      } else {
        target[key] = value
      }
    }
  }

  return target
}
