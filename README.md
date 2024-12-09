# JavaScript Loose Equality Bug

This repository demonstrates an uncommon bug in JavaScript related to the loose equality operator (==) and its unexpected behavior when comparing NaN (Not a Number) and positive zero (+0) with negative zero (-0).

## Bug Description
The loose equality operator (==) in JavaScript performs type coercion before comparison. This can lead to unexpected results in certain cases, such as when comparing NaN or +0 and -0.

- NaN is never equal to itself, including when using loose equality.
- +0 and -0 are considered equal when using loose equality.

## Bug Demonstration
The `bug.js` file contains a function that illustrates this behavior.

## Solution
The `bugSolution.js` file demonstrates how to correct this issue using the strict equality operator (===). The strict equality operator does not perform type coercion, resulting in accurate comparisons.

## How to reproduce the bug
1. Clone this repository.
2. Navigate to the repository's directory.
3. Open `bug.js` in a JavaScript environment (e.g., Node.js).
4. Run the script.  Observe that the function returns `false` when comparing NaN to itself, even though they are both NaN values. It returns `true` for `+0` and `-0`, even though they are distinct values.

## How to fix the bug
1. Clone this repository.
2. Navigate to the repository's directory.
3. Open `bugSolution.js` in a JavaScript environment (e.g., Node.js).
4. Run the script. Observe that the function now correctly identifies the differences and similarities based on strict equality.