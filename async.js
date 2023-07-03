// Async/Await example
function fetchData() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        var data = { name: "John", age: 30 };
        // Simulating a successful asynchronous operation
        resolve(data);
        // Simulating an error in the asynchronous operation
        // reject("Error occurred");
      }, 2000);
    });
  }
  
  async function getData() {
    try {
      var data = await fetchData();
      console.log("Data:", data);
      console.log("Data fetched successfully!");
    } catch (error) {
      console.log("Error:", error);
      console.log("Error occurred while fetching data!");
    } finally {
      console.log("Async/await execution completed!");
    }
  }
  
  // Invoking the async function
  getData();
  