// DOM manipulation and event handling
// document.addEventListener("DOMContentLoaded", function() {
//     var button = document.getElementById("button");
//     var text = document.getElementById("text");
  
//     button.addEventListener("click", function() {
//       text.textContent = "Text has been changed!";
//     });
//   });
// DOM manipulation and event handling
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("button");
    var text = document.getElementById("text");
  
    button.addEventListener("click", function() {
      text.innerHTML = "<em>Text has been <strong>changed</strong>!</em>";
    });
  });
  