

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Call the function to fetch data asynchronously
  fetchData();
  //  -------------------------##########___________

// async function  fetchData(){
//     const responce =await fetch("http://jsonplaceholder.typecode.com/todos/1");
//     const data = await responce.json();
//     console.log(data);
// }
// fetchData();









///////////////////////////////////////////////################################/////////////////

// response.ok: This is a property of the Response object returned by the fetch function. It is a boolean that is true if the HTTP response status is within the range of 200-299, indicating a successful response.