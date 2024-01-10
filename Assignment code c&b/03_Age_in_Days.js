
  

  const person = {
    firstName: "Abdul Amin",
    lastName: "Khan",
    age: 24,
  };
  
  function ageInDays(personObject, callback) {
    const fullName = `${personObject.firstName} ${personObject.lastName}`;
    const ageInDays = personObject.age * 365;
    callback(fullName, ageInDays);
  }
  
  function logResult(fullName, ageInDays) {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}`);
  }
  
   ageInDays(person, logResult);
  

///////////////////////////////////////////////////////#############////////////////

// function ageInDays(person) {
//     // Concatenate first and last name
//     const fullName = `${person.firstName} ${person.lastName}`;
  
//     // Calculate age in days
//     const ageInDays = person.age * 365;  
  
//     // Return a callback function
//     return function logMessage() {
//       console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
//     };
//   }
  
//   // Example usage:
//   const personInfo = {
//     firstName: "Abdul Amin",
//     lastName: " Khan",
//     age: 24,
//   };
  
//   const logPersonAge = ageInDays(personInfo);
  
//   logPersonAge();

