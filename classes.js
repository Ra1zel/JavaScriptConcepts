// Class
class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log(`Hello, ${this.name}!`);
    }
  }
  
  const person = new Person("John");
  person.greet(); // Output: Hello, John!
  