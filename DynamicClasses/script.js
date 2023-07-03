// Applying dynamic classes
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("button");
    var text = document.getElementById("text");
  
    button.addEventListener("click", function() {
      text.classList.toggle("primary");
      text.classList.toggle("highlight");
      text.classList.toggle("large");
    });
  });
  