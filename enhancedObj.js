// Enhanced Object Literals
const name = "John";
const age = 30;

const person = {
  name,
  age,
  greet() {
    console.log(`Hello, ${this.name}! You are ${this.age} years old.`);
  },
};

person.greet(); // Output: Hello, John! You are 30 years old.
