# 2.2.2 - JavaScript Array methods P1

---

- Arrays have a bunch of methods attached to them.
- Many of which you'll use on a daily basis.

---

## Common Array methods

- `.concat()`
- `.join()`

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_array.asp)

The `.concat()` method returns a _new_ array with the values of two existing arrays.

```js
// Example
const arrayOne = ['think', 'dream', 'learn', 'write'];
const arrayTwo = ['thought', 'dreams', 'knowledge', 'truth'];

let newArray = arrayOne.concat(arrayTwo);
```

---

### [`.join()`](https://www.w3schools.com/jsreF/jsref_join.asp)

The `.join()` method returns the array as a string.

```js
// Example
const lexicon = [
  'The',
  'large',
  'shaggy',
  'dog',
  'barked',
  'at',
  'the',
  'silence',
];

let sentence = lexicon.join();
```

---

And there are so many more.

---

## Exercise

Let's dip into the internet and see if we can learn all of these methods collectively.

1. `.includes()`, `.slice()`
2. `.indexOf()`, `.push()`
3. `.pop()`, `.sort()`
4. `.shift()`, `.unshift()`
5. `.reverse()`, `.lastIndexOf()`
6. `.splice()`, `.toString()`

- Split into teams.
- Take given methods
  - find an explanation/definition, then write your own.
  - create two examples of each method in use. Be creative. 😛

``` js
// .includes()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes('Orange'));

// .slice()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.slice(1, 3));

// .indexOf()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf('Orange'));
// Answer: 1

// .push()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push("Grape"));
console.log(fruits);
// Answer: 5
// Answer: [ 'Banana', 'Orange', 'Apple', 'Mango', 'Grape' ]

// .pop()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop("Apple"));
console.log(fruits);
// Answer: Mango
// Answer: [ 'Banana', 'Orange', 'Apple' ]

// .sort() -- alphabetic
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
// Answer: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// .sort() -- numeric
let numArray = [12345, 104, 54, 0, -4];
numArray = numArray.sort((a,b) => a-b);
console.log(numArray);
// Answer: [ -4, 0, 54, 104, 12345 ]

// .shift()  .unshift()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift('Banana'));
console.log(fruits);
// Answer: Banana
// Answer: [ 'Orange', 'Apple', 'Mango' ]
// Answer: 4
// Answer: [ 'Banana', 'Orange', 'Apple', 'Mango' ]


// .reverse()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse());
// Answer: [ 'Mango', 'Apple', 'Orange', 'Banana' ]

// .lastIndexOf()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.lastIndexOf('Apple'));
// Answer: 2

// .splice()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Liwi");
console.log(fruits);
// Answer: [ 'Banana', 'Orange', 'Lemon', 'Liwi', 'Apple', 'Mango' ]

// .toString()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
// Answer: Banana,Orange,Apple,Mango
```
