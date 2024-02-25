// Add the Edit Button:
const fruitLi = document.querySelectorAll(".fruit");
fruitLi.forEach((item) => {
  const editButton = document.createElement("button"); // Create a new edit button for each li element
  editButton.className = "edit-btn";
  editButton.innerText = "Edit";
  item.appendChild(editButton);
});

// Implement the code as in video but with one extra 'Edit' button in 'li'
const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fruitToAdd = document.getElementById("fruit-to-add");
  const newLi = document.createElement("li");
  newLi.innerHTML =
    fruitToAdd.value +
    '<button class="delete-btn">x</button>' +
    '<button class="edit-btn">Edit</button>';
  fruits.appendChild(newLi);
});

fruits.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
});
