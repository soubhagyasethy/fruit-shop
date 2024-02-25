// Add input element inside form, before button, to take fruit description
const form = document.querySelector("form");
const fruitDescription = document.createElement("input");
fruitDescription.type = "text";
fruitDescription.id = "description";

// Get a reference to the button element
const button = document.querySelector("button");

// Insert the new input element before the button
form.insertBefore(fruitDescription, button);

// Show the fruit description in italics on the next line
const fruits = document.querySelectorAll(".fruit");

// Different descriptions for each fruit
const descriptions = [
  "Sweet and yellow, often eaten when ripe.",
  "Crisp and juicy, comes in various colors.",
  "Citrusy and refreshing, good source of vitamin C.",
  "Small and fuzzy, with green flesh inside.",
];

for (let i = 0; i < fruits.length; i++) {
  const fruitDes = document.createElement("p");
  fruitDes.innerText = descriptions[i];
  const delBtn = fruits[i].querySelector(".delete-btn");
  fruits[i].insertBefore(fruitDes, delBtn);
}

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById("filter");

filter.addEventListener("keyup", function (event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName("fruit");

  for (let i = 0; i < fruitItems.length; i++) {
    const currentFruit = fruitItems[i].firstChild.textContent.toLowerCase();
    // if(currentFruit.indexOf(textEntered) === -1) {
    //   fruitItems[i].style.display = 'none';
    // } else {
    //   fruitItems[i].style.display = 'flex';
    // }
    const currentFruitDes = fruitItems[i]
      .querySelector("p")
      .textContent.toLowerCase();

    if (
      currentFruit.includes(textEntered) ||
      currentFruitDes.includes(textEntered)
    ) {
      fruitItems[i].style.display = "flex";
    } else {
      fruitItems[i].style.display = "none";
    }
  }
});
