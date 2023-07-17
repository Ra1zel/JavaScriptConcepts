// DOM manipulation: Selecting and Traversing
document.addEventListener("DOMContentLoaded", function() {
    // Selecting elements
    var container = document.getElementById("container");
    var listItem = document.querySelector(".list-item");
    var paragraphs = document.getElementsByClassName("paragraph");
  
    // Modifying elements
    container.style.backgroundColor = "lightgray";
    listItem.textContent = "Updated Item";
    paragraphs[1].style.fontStyle = "italic";
  
    // Traversing the DOM
    var parent = listItem.parentNode;
    var nextSibling = listItem.nextElementSibling;
    var previousSibling = listItem.previousElementSibling;
  
    parent.style.border = "2px solid red";
    nextSibling.style.color = "purple";
    previousSibling.style.color = "orange";
  });
  