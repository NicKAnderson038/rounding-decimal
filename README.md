# Precision Decimal Rounding ( Round, Ceil, & Floor)

<br>

### What this package does? 🤔

Tiny package for rounding a number to a specific number of decimal places

```js
/* example */

// 1. desired decimal in response
// 2. string or number
const MY_DECIMAL_LENGTH = 2

// 1. string or number
const MY_VALUE = '1.293832'

rounding.up(MY_VALUE, MY_DECIMAL_LENGTH) // 1.29 🏁
```

<br>

### Why this package? 🤔

1. Can handle decimals as type string or number.
2. Also compatible with Typescript files.

#

<br>

### Results 🙋

1. Pass in a decimal (number), returns a type number response.
2. Pass in a decimal (string), returns a type string response..

#

<br>

### Size 🔬

Less-than < 2 kilobytes

#

<br>

### OK! Lets Get Started 💥

### Npm or Yarn installion

```bash
npm install rounding-decimal

yarn add rounding-decimal
```

<br>

### Import Module 📦

```js
import { rounding } from 'rounding-decimal'
```

<br>

### Methods ⚙️

```js
/* Math.round */
rounding.up(MY_VALUE, MY_DECIMAL_LENGTH)

/* Math.ceil */
rounding.ceil(MY_VALUE, MY_DECIMAL_LENGTH)

/* Math.floor */
rounding.floor(MY_VALUE, MY_DECIMAL_LENGTH)
```

<br>

### The End 🏝️

#

<br>
<br>
<br>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" width=200>

<br>
<br>

### We could use your help! Please share your experience & code if you got a solution 🛠️to a unique problem 🚀. The community needs your support! ❤️

### Working with npm packages

##### \*\*\* New package

1. Setup an npm account (if not done aleardy)
2. Create a `package.json` at application root.

```json
{
  "name": "name-of-project-for-npm", // unique
  "version": "1.0.0", // start off 1.0.0
  "description": "Descripton of my application",
  "main": "index.min.js",
  "license": "MIT", // open source license!
  "keywords": ["list", "of", "searchable", "key", "words"]
}
```

2. `npm login`
3. `npm publish`

##### \*\*\* update package

1. `npm login`
2. `npm version` and the new version number ie: `1.0.1`
3. `npm publish`

##### \*\*\* am i still logged in?

1. `npm whoami`

#
