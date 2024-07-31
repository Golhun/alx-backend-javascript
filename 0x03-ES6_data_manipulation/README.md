# JavaScript Data Structures and Array Methods

## Learning Objectives

At the end of this project, you should be able to explain to anyone, without the help of Google:

- How to use `map`, `filter`, and `reduce` on arrays
- Typed arrays
- The `Set`, `Map`, and `WeakMap` data structures

## Read or Watch

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All of your functions must be exported

## Setup

### Install NodeJS 12.11.x

In your home directory:

```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify the installation:

```sh
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint by using the supplied package.json and run:

```sh
npm install
```

Configuration files

Ensure you have the following configuration files:
.babelrc

```json

{
  "presets": ["@babel/preset-env"]
}

.eslintrc.json

json

{
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {}
}
```

package.json

Ensure your package.json includes the following dependencies and scripts:

```json
{
	"name": "project-name",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "jest",
		"full-test": "npm run lint && npm test",
		"lint": "eslint ."
	},
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"@babel/preset-env": "^7.14.0",
		"babel-jest": "^26.6.0",
		"eslint": "^7.24.0",
		"jest": "^26.6.0"
	}
}
```

Usage

To run the tests:

```sh
npm run test
```

To run the linter:

```sh
npm run lint
```

To run the full test suite:

```sh

npm run full-test
```

Ensure all functions are exported correctly from their respective modules. For example:

```js
// exampleFunction.js
function exampleFunction(arr) {
	return arr.map((item) => item * 2);
}

module.exports = exampleFunction;
```

```js
// exampleFunction.test.js
const exampleFunction = require("./exampleFunction");

test("doubles the elements in the array", () => {
	expect(exampleFunction([1, 2, 3])).toEqual([2, 4, 6]);
});
```

This project provides hands-on experience with important JavaScript data structures and array methods, preparing you for advanced usage and implementation.
