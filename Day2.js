// write a function that returns the sum of two numbers.
// write a function that returns the sum of all numbers regardless of # of params.

// Example: for param1 = 1 and param2= 2, the output should be add ( param1,param2) = 3

// imput integer param1

function sum(params1, params2) {
  return params1 + params2;
}
function sumAll(...params) {
  let result = 0;
  params.forEach((number) => {
    result += number;
  });
  return result;
}
console.log(sumAll(1,2,3,))
