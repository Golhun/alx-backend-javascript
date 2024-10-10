# 0x04. TypeScript

## Project Overview

This project is focused on mastering TypeScript, a strongly-typed superset of JavaScript that compiles to plain JavaScript. TypeScript offers static typing, interfaces, classes, and many other features that make it easier to develop large-scale applications. The project covers key TypeScript concepts like types, interfaces, generics, namespaces, and DOM manipulation.

## Learning Objectives

By the end of this project, you should be able to:

- Understand and work with basic types in TypeScript.
- Create and use **Interfaces**, **Classes**, and **Functions** in TypeScript.
- Manipulate the **DOM** using TypeScript.
- Use **Generic Types** to create reusable components.
- Understand and implement **Namespaces** in TypeScript.
- Merge declarations in TypeScript.
- Work with **Ambient Namespaces** to import external libraries.
- Implement basic **Nominal Typing** in TypeScript.

## Technologies Used

- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Jest (v24.9.x)**: For unit testing your TypeScript code.
- **Node.js v12.x**: For running your TypeScript and JavaScript code.
- **Ubuntu 18.04 LTS**: The operating system where your TypeScript code will be transpiled and tested.

## Setup and Installation

### 1. Install TypeScript

Make sure you have TypeScript installed globally on your system. You can install TypeScript using npm:

```bash
npm install -g typescript
```

Verify the installation by checking the TypeScript version:

```bash
tsc -v
```

### 2. Compile TypeScript Files

To compile a TypeScript file, run:

```bash
tsc filename.ts
```

You can also configure TypeScript to compile automatically by creating a `tsconfig.json` file.

### 3. Install Jest for Testing

In your project directory, make sure you install Jest for testing:

```bash
npm install --save-dev jest @types/jest ts-jest
```

To run tests, execute:

```bash
npm run test
```

### 4. Transpiling Code

All your TypeScript files will be transpiled, and the TypeScript compiler should not produce any warnings or errors. Ensure you have set up a `tsconfig.json` file for the project, which will configure the compiler options.

## Project Requirements

- **Editors**: You may use `vi`, `vim`, `emacs`, or **Visual Studio Code**.
- All TypeScript files should have a `.ts` extension and must end with a newline.
- A `README.md` file is required at the root of your project folder.
- The TypeScript compiler must not show any warnings or errors during compilation.
- Your code will be checked using **Jest**.

## Key TypeScript Concepts

### Basic Types

TypeScript provides several basic types such as:

- `number`
- `string`
- `boolean`
- `array`
- `tuple`
- `enum`
- `any`
- `void`
- `null` and `undefined`

### Interfaces

Interfaces in TypeScript allow you to define the shape of an object, making your code more predictable and flexible.

### Classes and Functions

TypeScript allows you to define classes with properties, methods, and constructors. Functions can be strongly-typed, providing clear definitions for parameters and return values.

### Working with the DOM

You can use TypeScript to interact with the DOM by defining the types of elements and their properties, ensuring safe and efficient DOM manipulation.

### Generic Types

Generics provide a way to create reusable components that work with a variety of data types while maintaining type safety.

### Namespaces and Declaration Merging

Namespaces organize code and avoid naming collisions. Declaration merging allows multiple declarations of the same entity to be combined.

### Ambient Namespaces

Ambient namespaces enable importing external libraries in TypeScript, making it easier to integrate with third-party code.

### Nominal Typing

TypeScript uses structural typing by default, but you can enforce nominal typing using branded types for stricter type checking.
