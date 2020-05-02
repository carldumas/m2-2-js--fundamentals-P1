// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
function calculateAverage(grades) {
  // create default num that will increase
  sum = 0;

  // create a function to check each grade and add the number to sum
  grades.forEach(function(grade){
    return sum += grade;
  });

  // divide sum by grades.length to get the average and use math.round to round up final num
  return Math.round(sum / grades.length);
}

// create a function to get letterGrade the average value and assign it a value
function getLetterGrade(grade) {
    let letterGrade = 'A';

    // create a condition for each grade and assign a specific value
    if (grade < 90) letterGrade = 'B';
    if (grade < 80) letterGrade = 'C';
    if (grade < 70) letterGrade = 'D';
    if (grade < 60) letterGrade = 'F';

    return letterGrade;
}

console.log(getLetterGrade(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65])));

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


