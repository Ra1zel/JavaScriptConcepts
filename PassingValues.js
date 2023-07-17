// Pass by value
function increment(num) {
    num++;
    console.log("Inside increment function:", num);
  }
  
let count = 5;
console.log("Before increment function:", count);
increment(count);
console.log("After increment function:", count);

  
  // Pass by reference
function changeName(person) {
    person.name = "Alice";
    console.log("Inside changeName function:", person);
  }
  
let personObj = { name: "Bob" };
console.log("Before changeName function:", personObj);
changeName(personObj);
console.log("After changeName function:", personObj);
  