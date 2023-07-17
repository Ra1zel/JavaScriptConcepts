// 'this' in object methods
let person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  person.greet(); // Outputs: Hello, my name is John
  
  // 'this' in constructor functions
  function Person(name) {
    this.name = name;
    this.greet = function() {
      console.log("Hello, my name is " + this.name);
    };
  }
  
  let person1 = new Person("Alice");
  let person2 = new Person("Bob");
  
  person1.greet(); // Outputs: Hello, my name is Alice
  person2.greet(); // Outputs: Hello, my name is Bob
