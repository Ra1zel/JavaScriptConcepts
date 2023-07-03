// Destructuring
const person = {
    name: "John",
    age: 30,
  };
  
  const { name, age } = person;
  console.log(name); // Output: John
  console.log(age); // Output: 30

  
  // Default Parameters
function greet(name = "John") {
    console.log(`Hello, ${name}!`);
  }
  
  greet(); // Output: Hello, John!
  greet("Alice"); // Output: Hello, Alice!
  
  // Rest Parameter
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // Output: 10
  
  // Spread Syntax (Arrays)
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  
  const combined = [...arr1, ...arr2];
  console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
  
  // Spread Syntax (Objects)
  const obj1 = { x: 1, y: 2 };
  const obj2 = { z: 3 };
  
  const merged = { ...obj1, ...obj2 };
  console.log(merged); // Output: { x: 1, y: 2, z: 3 }
  