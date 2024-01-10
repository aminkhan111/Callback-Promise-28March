

function manipulateString(inputString){
    const manipulatedString = inputString.toUpperCase();

function logString(){
    console.log(`The manipulated string is :${manipulatedString}`);
}

return logString;
}


// Example usage:
  const originalString = "Hello,World"; 


  const logmanipulatesring = manipulateString(originalString);

  logmanipulatesring();

//////////////////ANOTHER WAY #///////////////

// function manipulateString(inputString, callback) {
//     const manipulatedString = inputString.toUpperCase();

//     callback(manipulatedString);
//     }
//     function logString(manipulatedString) {
//     console. log(`The manipulated string is: ${manipulatedString}`);
//     }
//     // Expected Output:
//     manipulateString("hello, world!", logString); // The manipulated string is:
//     // HELLO, WORLD!