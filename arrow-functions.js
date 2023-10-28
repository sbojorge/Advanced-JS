// Vanilla JS
// function addTwoNumbers (a, b){
//     // Code block
//     return a + b;
// };

// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow function with parameters
const addTwoNumbers = (a, b) => {
  // Code block
  return a + b;
};

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single line arrow function with parameters
// const addTwoNumbers2 = (a, b) => (a + b); // also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(3, 6);
console.log(sum2);

// Implicit return
const saySomething = (message) => console.log(message);
saySomething("hello there!!");

const sayHello = () => console.log("hello");
sayHello();

// Returning multiple lines
const returnMultipleLines = () => (
  `<p>
    This is a multiple line message
   </p>`
);
console.log(returnMultipleLines());
