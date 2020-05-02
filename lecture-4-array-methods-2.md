# 2.2.4 - JavaScript Array methods P2

---

- Some array methods need a function as a parameter.
- These are arguably the most flexible and useful methods.

---

# Problem

Let's say we have an array of numbers:

`[3, -7, 1, 5, -2, 8, -9, 4]`

We want to filter out all negative numbers:

`[3, 1, 5, 8, 4]`

How do we do that?
```js
let arr = [3, -7, 1, 5, -2, 8, -9, 4];
let positiveArr = arr.filter(function checkIfPositive(item) {
  return item > 0;
});
let negativeArr = arr.filter(function checkIfPositive(item) {
  return item < 0;
});
console.log(positiveArr);
console.log(negativeArr);
```


---

`for` loops are very _flexible_, but they're not very _focused_.

Methods like `filter` are much clearer. It is easier to understand what they're doing.

---

### [`.forEach()`](https://www.w3schools.com/jsreF/jsref_foreach.asp)

The `.forEach()` method calls a function once for every element of the array.

```js
// Example
const words = [
  'The',
  'large',
  'shaggy',
  'dog',
  'barked',
  'at',
  'the',
  'silence',
];

words.forEach(function (word) {
  // do something
  console.log(words)
});

words.forEach(function(word){
  console.log(word.slice(0, 2));
});

// Compare that to a for loop:
for (let i = 0; i < Array.length; i++) {
  let word = words[i];
  console.log('My for loop result: ' + word.slice(0, 2));
}
```

---

### [`.map()`](https://www.w3schools.com/jsreF/jsref_map.asp)

The `.map()` method calls the provided function once for every element in the array and returns _a new array with the result_.

```js
// Example
const words = [
  'The',
  'large',
  'shaggy',
  'dog',
  'barked',
  'at',
  'the',
  'silence',
];

const newWords = words.map(function (word) {
  return word.toUpperCase();
});
console.log(words);
console.log(newWords);
```

---

### [`.find()`](https://www.w3schools.com/jsreF/jsref_find.asp)

The `.find()` method is like `filter`, except it returns the _first_ match.

```js
// Example
const pizzas = [
  { name: 'pepperoni', isVegetarian: false },
  { name: 'all-dressed', isVegetarian: false },
  { name: 'green pepper and onion', isVegetarian: true },
  { name: 'smoked meat', isVegetarian: false },
  { name: 'cheese', isVegetarian: true },
  { name: 'sundried tomatoes', isVegetarian: true },
];

const somethingICanEat = pizzas.find(function (pizza) {
  return pizza.isVegetarian;
});
```

---

### [`.every()`](https://www.w3schools.com/jsref/jsref_every.asp)

The `.every()` method checks if all elements in an array pass a test.

It returns `true` or `false`.

```js
// Example
const snacksInMyBackpack = [
  { name: 'crackers', containsPeanuts: false },
  { name: 'M&Ms', containsPeanuts: false },
  { name: 'Lucky Charms', containsPeanuts: false },
  { name: 'trail mix', containsPeanuts: true },
  { name: 'grapes', containsPeanuts: false },
];

const canEnterSchool = snacksInMyBackpack.every(function (snack) {
  return snack.containsPeanuts === false;
});
```
