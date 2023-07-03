// Object with properties and methods
let person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
  };
  
  console.log(person.name); // Accessing object property: John
  console.log(person.age); // Accessing object property: 30
  person.greet(); // Invoking object method: Hello, my name is John and I am 30 years old.
  
  // Adding properties and methods dynamically
  person.city = "New York";
  person.sayCity = function() {
    console.log("I am from " + this.city);
  };
  
  console.log(person.city); // Accessing dynamically added property: New York
  person.sayCity(); // Invoking dynamically added method: I am from New York
  
  // Prototypes and object inheritance
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  };
  
  let person1 = new Person("Alice", 25);
  let person2 = new Person("Bob", 35);
  
  console.log(person1.name); // Accessing object property: Alice
  console.log(person2.name); // Accessing object property: Bob
  person1.greet(); // Invoking object method: Hello, my name is Alice and I am 25 years old.
  person2.greet(); // Invoking object method: Hello, my name is Bob and I am 35 years old.
  