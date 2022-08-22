// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// a) Create a test with expect statements for each of the variables provided.
    describe("fib", () => {
    test ("returns numbers of the Fibonacci sequence", () => {
        expect (fib(fibLength1)).toEqual(1, 1, 2, 3, 5, 8)
        expect (fib(fibLength2)).toEqual(1, 1, 2, 3, 5, 8, 13, 21, 34, 55)
    })
}) 

// Good failure on this test

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.477 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// learnacademy@LEARNs-MacBook-Air week-3-assessment-jayaries329 % yarn jest
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-3-assessment-jayaries329/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   fib
//     ✕ returns numbers of the Fibonacci sequence (1 ms)

//   ● fib › returns numbers of the Fibonacci sequence

//     ReferenceError: fib is not defined


// b) Create the function that makes the test pass.
// Pseudo code:
// Create a function called fib that will take an array as an input.
// Research the Fibonacci sequence for better understanding of the concept.
// Use a loop for iteration and mathematic computation
// Utilize a .push method to display the final result.
// Return an array with numbers of the Fibonacci sequence.
// * Although I couldn't get this to pass Jest, the code works, but my function returned an extra value along with the expected values. *

const fib = (array) => {
    for (var fibArray = [0,1], i=0, j=1, k=0; k<array; i=j, j=x, k++) {
        x=i+j;
        fibArray.push(x);
    }
    console.log(fibArray);
}
fib(fibLength1);

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// a) Create a test with expect statements for each of the variables provided.
    describe("oddArray", () => {
    test ("returns odd numbers sorted from least to greatest", () => {
        expect (oddArray(fullArr1)).toEqual(-9, 7, 9, 199)
        expect (oddArray(fullArr2)).toEqual(-823, 7, 23)
    })
}) 

// Good failure on this test

// FAIL  ./code-challenges.test.js
// oddArray
//   ✕ returns odd numbers sorted from least to greatest (1 ms)

// ● oddArray › returns odd numbers sorted from least to greatest

//   ReferenceError: oddArray is not defined


// b) Create the function that makes the test pass.
// Pseudo code:
// Create a function named oddArray that takes an array as an input
// Implement a for loop for array iteration to extract odd numbers from the array.
// Use a .sort method along with the for loop to sort the results
// Return an array of only odd numbers sorted from least to greatest
// * For some reason, I could not get this code to work properly after several tries and re-factors. I got the iteration going, but I couldn't pluck the values out like this challenge is asking. I'm pretty sure that there's an oversight of something simple on my part, but I hit a wall with this one *
const oddArray = (array) => {
    for (i=0; i<array.length; i ++)
    if (i % 3 == 0) {
        return array.sort();
    }
    
    }
    
oddArray(fullArr1);






// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

const numbersToAdd1 = [2, 4, 45, 9]
// // Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

// a) Create a test with expect statements for each of the variables provided.
    describe("numbersAdded", () => {
    test ("returns an accumulating sum", () => {
        expect (numbersAdded(numbersToAdd)).toEqual(2, 6, 51, 60)
        expect (numbersAdded(numbersToAdd)).toEqual(0, 7, 1, 11)
           expect (numbersAdded(numbersToAdd)).toEqual([])

    })
}) 

// Good failure on this test

// FAIL  ./code-challenges.test.js
// numbersAdded
//   ✕ returns an accumulating sum

// ● numbersAdded › returns an accumulating sum

//   ReferenceError: numbersAdded is not defined

//     86 |     describe("numbersAdded", () => {
//     87 |     test ("returns an accumulating sum", () => {
//   > 88 |         expect (numbersAdded(numbersToAdd)).toEqual(2, 6, 51, 60)
//        |         ^
//     89 |         expect (numbersAdded(numbersToAdd)).toEqual(0, 7, 1, 11)
//     90 |            expect (numbersAdded(numbersToAdd)).toEqual([])
//     91 |

//     at Object.expect (code-challenges.test.js:88:9)


// b) Create the function that makes the test pass.
// Pseudo code:
// Create a function called numbersAdded that takes in an array
// Create a variable that will store mathematic functions for calculation
// Use the variable along with a map method to return an array of the accumulating sum of array contents
// * This code works, but it failed the Jest test *
const cumulativeSum = (sum => value => sum += value) (0);
const numbersAdded = (array) => {
    return array.map(cumulativeSum)
}
numbersAdded(numbersToAdd3);
