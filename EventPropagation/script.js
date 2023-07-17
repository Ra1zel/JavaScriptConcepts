// Event Propagation
document.addEventListener("DOMContentLoaded", function() {
    var outer = document.getElementById("outer");
    var inner = document.getElementById("inner");
    var button = document.getElementById("button");
  
    outer.addEventListener("click", function(event) {
      console.log("Outer div clicked");
      console.log("Target:", event.target.id);
      console.log("Current Target:", event.currentTarget.id);
    });
  
    inner.addEventListener("click", function(event) {
      console.log("Inner div clicked");
      console.log("Target:", event.target.id);
      console.log("Current Target:", event.currentTarget.id);
    });
  
    button.addEventListener("click", function(event) {
      console.log("Button clicked");
      console.log("Target:", event.target.id);
      console.log("Current Target:", event.currentTarget.id);
    });
  });
  