function doubleArrayElement(arr,callback){

if(typeof callback !== 'function'){
    throw new Error('Callback must be a function');

}
 if (!Array.isArray(arr)) {
      throw new Error('Input must be an array of integers');
    }

const doubleArray =[];

// itirate throw each input array

for (let i=0; i < arr.length; i++){

    const doubledValue = callback(arr[i]);
    doubleArray.push(doubledValue);

}

return doubleArray;

}

/////////////////////////////////////////////////Applying part///////////


const originalArray = [1, 2, 3, 4, 5];

 // Define a callback function to double a number

 const doubleCallback = function (num) {
    return num * 2;
  };

  // Call the function with the original array and the callback
  const resultArray = doubleArrayElements(originalArray, doubleCallback);
  
  console.log(resultArray);  




// ---------------------ALTERNATIVE -----------------//

// function doubleArray(arr, callback) {
//     const doubledArr = arr.map((num) => {
//       return callback(num);
//     });
//     return doubledArr;
//   }
  
//   const originalArray = [1, 2, 3, 4];
  
//   function callback(num) {
//     return num * 2;
//   }
  
//   const doubledArray = doubleArray(originalArray, callback);
  
//   console.log(doubledArray); // Output: [2, 4, 6, 8]
  








