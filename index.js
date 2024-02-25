// Write your code below:
// Add sub-heading inside the first div
const mainHeading = document.getElementById("main-heading");
const subHeading = document.createElement("h3");
subHeading.textContent = "Buy high quality organic fruits online";
subHeading.style.fontStyle = "italic";
mainHeading.after(subHeading);

// Add paragraph tag showing total fruits inside the second div
const basketHeading = document.getElementById("basket-heading");
const totalFruits = document.createElement("p");
totalFruits.textContent = "Total fruits: 4";
totalFruits.id = "fruits-total";
basketHeading.before(totalFruits);
