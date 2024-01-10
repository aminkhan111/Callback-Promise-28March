// Function that calculates the square of a number
function squareOfANumber(num) {
    console.log(num * num);
  }
  
  // Function that takes a number and another function as arguments
  function operation(num, func) {
    func(num);
  }
  
  // Calling the 'operation' function with the number 5 and the 'squareOfANumber' function
  operation(5, squareOfANumber);

//   Execution Flow:

// When operation is called, it invokes the function passed as the second argument (squareOfANumber) with the number 5.
// This triggers the execution of squareOfANumber(5), and the result, which is the square of 5 (25), is logged to the console.
  