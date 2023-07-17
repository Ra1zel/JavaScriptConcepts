// Function declaration
function sayHello() {
    console.log("Hello!");
  }
  
  // Function invocation
  sayHello(); // Outputs: "Hello!"
  
  // Function with parameters
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Alice"); // Outputs: "Hello, Alice!"
  greet("Bob"); // Outputs: "Hello, Bob!"
  
  // Function with a return value
  function add(a, b) {
    return a + b;
  }
  
  let result = add(3, 4);
  console.log(result); // Outputs: 7
  
  // Function expression
  let multiply = function(a, b) {
    return a * b;
  };
  
  let product = multiply(2, 5);
  console.log(product); // Outputs: 10
  
  // Arrow function
  let divide = (a, b) => a / b;
  
  let quotient = divide(10, 2);
  console.log(quotient); // Outputs: 5
  
  // Anonymous function
  let square = function(num) {
    return num * num;
  };
  
  let squaredNumber = square(4);
  console.log(squaredNumber); // Outputs: 16
  
  // Higher-order function
  function operate(operation, a, b) {
    return operation(a, b);
  }
  
  let result1 = operate(add, 5, 3);
  console.log(result1); // Outputs: 8
  
  let result2 = operate(multiply, 2, 4);
  console.log(result2); // Outputs: 8
  
  // Immediately Invoked Function Expression (IIFE)
  (function() {
    console.log("I am an IIFE!");
  })();
  
  // Default parameters
  function power(base, exponent = 2) {
    return Math.pow(base, exponent);
  }
  
  let result3 = power(3);
  console.log(result3); // Outputs: 9
  
  let result4 = power(2, 4);
  console.log(result4); // Outputs: 16
  