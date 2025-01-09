# JavaScript Loose Equality Bug with Null

This repository demonstrates a common JavaScript bug related to loose equality (`==`) and `null` values.  Loose equality can lead to unexpected type coercion, potentially resulting in incorrect program behavior.

## Bug Description
The `bug.js` file contains a function `myFunc` that attempts to add two numbers. However, it uses loose equality (`==`) to check for `null` values. This can lead to unexpected results due to JavaScript's type coercion.

## Solution
The `bugSolution.js` file provides a corrected version of the function, using strict equality (`===`) to avoid type coercion issues.  Strict equality ensures that the comparison is performed without any type conversion, leading to more predictable results.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js` and `node bugSolution.js` to observe the differences in output when dealing with null inputs.

## Lesson Learned
Always use strict equality (`===`) when comparing values in JavaScript, especially when dealing with `null`, `undefined`, and numbers.