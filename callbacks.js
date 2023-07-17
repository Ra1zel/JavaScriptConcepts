// Callback function example
function doSomething(callback) {
    console.log("Doing something...");
    callback();
  }
  
  function callbackFunction() {
    console.log("Callback function executed!");
  }
  
  // Passing a callback function to doSomething
  doSomething(callbackFunction);
  