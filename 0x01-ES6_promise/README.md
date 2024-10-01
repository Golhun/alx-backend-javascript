# JavaScript Promises, Async/Await, and Error Handling Project

## Description

This project covers how to handle asynchronous operations in JavaScript using **Promises**, **async/await**, and **error handling** with **try/catch**. You will implement these concepts, ensuring cleaner and more readable code for managing asynchronous tasks.

## Learning Objectives

By the end of this project, you will understand:

- **Promises**: What they are, and how they help manage asynchronous operations.
  - Key methods: `then()`, `resolve()`, and `catch()`.
- **Async/Await**: How `async` and `await` simplify working with Promises.
- **Error Handling**: Using **throw** to raise exceptions and **try/catch** to handle errors gracefully.

## Requirements

- Environment: **NodeJS 12.11.x** on **Ubuntu 18.04 LTS**.
- Editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- Testing: **Jest** for unit tests.
- Linting: **ESLint** for code quality.
- Code will be verified using `npm run test` and `npm run lint`.

## Setup

### Install NodeJS 12.11.x

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify the installation:

```bash
nodejs -v  # v12.11.1
npm -v     # 6.11.3
```

### Install Jest, Babel, and ESLint

Run the following in your project directory after adding the configuration files (`package.json`, `babel.config.js`, `.eslintrc.js`):

```bash
npm install
```

## Key Concepts

### Promises

A **Promise** is an object that represents an operation which will complete in the future, either successfully or with an error. It helps to avoid callback hell and makes asynchronous code easier to manage.

- `then()`: Called when the Promise is fulfilled.
- `catch()`: Handles errors or rejected Promises.
- `resolve()`: Returns a resolved Promise.

Example:

```javascript
const promise = new Promise((resolve, reject) => {
	// some async task
	if (success) resolve(result);
	else reject(error);
});
promise
	.then((result) => console.log(result))
	.catch((error) => console.error(error));
```

### Async/Await

**Async** functions return a Promise. The **await** keyword is used inside an async function to wait for the Promise to resolve before continuing execution.

Example:

```javascript
async function fetchData() {
	try {
		const result = await someAsyncFunction();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
```

### Error Handling (Throw/Try)

Use **throw** to raise errors within code. Wrap risky code inside **try** blocks and handle errors with **catch** blocks.

```javascript
try {
	throw new Error("Something went wrong");
} catch (error) {
	console.error(error);
}
```

## Response Data Format

- **uploadPhoto** returns:

  ```json
  { "status": 200, "body": "photo-profile-1" }
  ```

- **createUser** returns:

  ```json
  { "firstName": "Guillaume", "lastName": "Salva" }
  ```

## Usage

To run tests with Jest:

```bash
npm run test
```

To lint the code with ESLint:

```bash
npm run lint
```
