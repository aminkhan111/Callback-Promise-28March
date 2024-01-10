async function getcombinedData() {
    const[data1, data2] = await Promise.all([
        
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
        response. json()
        ),

        fetch ("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
        response.json()
        )
    ]);

    const combineData = {
        todo: data1,
        post: data2,
    }
    return combineData;
}

getcombinedData().then((data)=>console.log(data));
  ///

//   getcombinedData().then(function(data) {
//     console.log(data);
//   });



/////////////////////////############ ANOTHER WAY///////############

// async function fetchDataFromAPIs() {
//     try {
//       // Use Promise.all to fetch data from both APIs concurrently
//       const [todoResponse, postResponse] = await Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/todos/1"),
//         fetch("https://jsonplaceholder.typicode.com/posts/1"),
//       ]);
  
//       // Check if the responses are OK
//       if (!todoResponse.ok || !postResponse.ok) {
//         throw new Error("Failed to fetch data from one or more APIs.");
//       }
  
//       // Parse the JSON data from the responses
//       const todoData = await todoResponse.json();
//       const postData = await postResponse.json();
  
//       // Combine the results into an object
//       const combinedData = {
//         todo: todoData,
//         post: postData,
//       };
  
//       // Log the combined data
//       console.log(combinedData);
//     } catch (error) {
//       console.error("Error fetching data:", error.message);
//     }
//   }
  
//   // Call the asynchronous function to fetch and log data
//   fetchDataFromAPIs();
  