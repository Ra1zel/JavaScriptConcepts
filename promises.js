// Promise example
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
  
  // Consuming the Promise
  fetchData()
    .then(function(data) {
      console.log("Data:", data);
      console.log("Data fetched successfully!");
    })
    .catch(function(error) {
      console.log("Error:", error);
      console.log("Error occurred while fetching data!");
    })
    .finally(function() {
      console.log("Promise execution completed!");
    });
  