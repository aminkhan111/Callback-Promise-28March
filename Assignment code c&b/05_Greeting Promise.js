function greet(name) {
    return new Promise((resolve, reject) => {
      if (name) {
        const greeting = `Hello, ${name}!  Wellcome To Our Team`;
        resolve(greeting);
      } else {
        reject(new Error("Name is required for greeting."));
      }
    });
  }
  const personName ="Abdul Amin Khan"
  greet(personName)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error.message);
    });
  