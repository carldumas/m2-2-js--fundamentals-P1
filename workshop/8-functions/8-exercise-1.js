// Q1
// Write a function that accepts two integers and displays
// the greater one, using `console.log`

// Define the function
function max(num1, num2) {
  let highestNum;
  if (num1 > num2){
    highestNum = num1;
  } else {
    highestNum = num2;
  }
  console.log(`The highest number is: ${highestNum}`)
}

// Call the function
max(12, 43);

max(111, 22);

max(22, 22); // hmmm, nothing for even number
