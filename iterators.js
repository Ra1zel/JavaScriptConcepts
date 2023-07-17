// Iterators + for..of
const arr = [1, 2, 3];

for (let element of arr) {
  console.log(element);
}
// Output:
// 1
// 2
// 3

// Enumerators for...in
const obj = {
    name: "John",
    age: 30,
  };
  
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
  // Output:
  // name: John
  // age: 30
  