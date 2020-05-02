# 2.2.3 - JavaScript Functions

---

Functions let us package up a bit of code to be run at a later time.

---

The idea comes from math.

---

### Example 1

```js
// The formula to calculate the area of a rectangle is
// "length times width"

// Solve this for the following rectangle:
let rectangle = { length: 10, width: 4 };

// Write a function that can solve it for ANY rectangle.
function calculateArea(rect) {
  return rect.length * rect.width;
}
console.log(calculateArea(rectangle));
```

---

### Example 2

```js
// Formula for area of circle: Pi times the radius squared
function calculateArea(radius) {
  return Math.PI * radius ** 2;
}
console.log(calculateArea(5));
```

---

## Why?

- Functions let you group and reuse code.
- _Define_ a function with parameters between the brackets.
- to _call_ the function (i.e. use it), you pass it arguments whose values take the place of the parameters in the function definition.
- The function acts just like any other expression when called.
- It produces the value you'd expect from the body of the function.

---

### Exercise 1

```js
// Q1. Write a function that returns the sum of 3 numbers.
function addAllthreeNumbers(a, b, c) {
  return a + b + c;
}
console.log(addAllthreeNumbers(2, 4, 6));

// Q2. Write a function that returns the square of a number minus twice the number.
function doMathThings(numberToProcess) {
  return numberToProcess ** 2 - numberToProcess * 2;
}
console.log(doMathThings(5));

// Q3. Write a function that returns the a person's full name, given their first and last names.
function combineNames(firstname, lastname) {
  if (typeof lastname === 'undefined') {
    return 'Invalid'
  }
  return firstname + ' ' + lastname
}
console.log(combineNames('Zack', 'Moore'));


//Q3
function conbineNames(firstName, lastName) {
  return firstName + ' ' + lastName;
  return "invalid - Did you forget something";
}

```

---

### Exercise 2

```js
// Q4. Write a function that returns the value of the tax for a given amount.
function calculateTax(amount) {
  let taxRate = 0.15;
  return amount * taxRate;
}
console.log(calculateTax(10));

// Q5. Write a function that returns the value 42.
function return42() {
  return 42;
}
console.log(return42());

// Q6. Write a function that returns "Hello!".
function returnHello() {
  return "Hello!";
}
console.log(returnHello());
```

---

- Functions are key in implementing these software development principles.
- Complexity emerges from simplicity

[Alternate Function definition](https://www.cs.utah.edu/~germain/PPS/Topics/functions.html)
