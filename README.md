# fu-tools


[![npm version](https://badge.fury.io/js/fu-tools.svg)](https://badge.fury.io/js/fu-tools)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made in Ukraine](https://img.shields.io/badge/Made%20in%20Ukraine-❤️-0057B7?style=flat&labelColor=005BBB&color=FFD700)](https://www.sternenkofund.org/en/donate)


Lightweight lodash-like utility library with all essentials in once place.

Maybe a bit less rich, but also less archaic.

> Some functions behave differently from classic lodash.
> I warned you.

## Why?

Load time on my microwave was critical enough to invent a cycle.

(lodash in NodeJS env loaded for 2 seconds)

## What is inside?

Most of lodash basics and a few small things we often have to copy-paste vibe-code.

See 👉[Documentation](./docs/fu-tools.md) for everything.

## Install

```bash
npm i fu-tools
```

## Usage

```javascript
import { shortId, wait, sha256, isPlainObject } from 'fu-tools'

const merged = extend({}, source1, source2)  // Deep merge
const id = shortId()  // Random ID
await wait(1000)  // Promise-based delay

// blah-blah-blah more examples...
```

You got the idea.
