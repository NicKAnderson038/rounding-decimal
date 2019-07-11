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

1. Setup an npm account. (if not done aleardy)
2. Create a `package.json` (snippet below) at application root and set version `1.0.0` to start. \*\*\* If open source, set the license to `MIT`. 🤟
3. Push changes to your git repo.
4. `npm login`
5. `npm publish`

```json
{
  "name": "unique-npm-project-name",
  "version": "1.0.0",
  "description": "Descripton of my application",
  "main": "index.min.js",
  "license": "MIT",
  "keywords": ["list", "of", "searchable", "key", "words"]
}
```

##### \*\*\* update package

1. Push changes to your git repo
2. `npm login`
3. `npm version` with new number
4. `npm publish`

```bash
# updating version example
npm verison 1.0.1
```

##### \*\*\* am i still logged in?

1. `npm whoami`

#
