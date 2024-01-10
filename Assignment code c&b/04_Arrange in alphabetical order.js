  
const books = [
    { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", year: 1989 },
    { title: "How to Win Friends and Influence People", author: "Dale Carnegie", year: 1936 },
    { title: "Atomic Habits", author: "James Clear", year: 2018 },
    { title: "The Power of Now", author: "Eckhart Tolle", year: 1997 },
    { title: "Mindset: The New Psychology of Success", author: "Carol S. Dweck", year: 2006 },
    { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", year: 2016 },
    { title: "You Are a Badass", author: "Jen Sincero", year: 2013 },
  ];
  
  function logTitles(titles) {
  titles.sort;
  console. log(titles.join(", "));
  }
  function extractTitles(books, callback) {
  const titles = books.map((book) => book.title);
  
  callback(titles);
  }
  extractTitles (books, logTitles);
  
  //////########## ANOTHER WAY ####### /////////////////
  
  // const books = [
  //   { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", year: 1989 },
  //   { title: "How to Win Friends and Influence People", author: "Dale Carnegie", year: 1936 },
  //   { title: "Atomic Habits", author: "James Clear", year: 2018 },
  //   { title: "The Power of Now", author: "Eckhart Tolle", year: 1997 },
  //   { title: "Mindset: The New Psychology of Success", author: "Carol S. Dweck", year: 2006 },
  //   { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", year: 2016 },
  //   { title: "You Are a Badass", author: "Jen Sincero", year: 2013 },
  // ];
  
  // function logTitlesAlphabetically(titles) {
  //   // Sort the titles alphabetically
  //   const sortedTitles = titles.sort();
  
  //   // Log the sorted titles to the console
  //   console.log("Titles in alphabetical order:");
  //   sortedTitles.forEach((title, index) => {
  //     console.log(`${index + 1}. ${title}`);
  //   });
  // }
  
  // // Function to process books and call the callback
  // function processBooksAndLogTitles(bookList, callback) {
  //   // Use map to create a new list containing only the titles
  //   const titlesList = bookList.map(book => book.title);
  
  //   // Call the callback function with the titles list
  //   callback(titlesList);
  // }
  
  // // Call the function to process books and log titles alphabetically
  // processBooksAndLogTitles(books, logTitlesAlphabetically);
  
  