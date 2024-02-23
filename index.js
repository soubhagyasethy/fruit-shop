// Write the code as shown in the video below:
let mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "right";
mainHeading.style.marginRight = "40px";

let fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "grey";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.listStyleType = "none";

let basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color = "brown";
basketHeading.style.marginLeft = "30px";

let fruit = document.querySelectorAll(".fruit");
for (let i = 0; i < fruit.length; i++) {
  fruit[i].style.backgroundColor = "white";
  fruit[i].style.padding = "30px";
  fruit[i].style.margin = "30px";
  fruit[i].style.borderRadius = "5px";
}

let oddFruit = document.querySelectorAll(".fruit:nth-child(odd)");
for (let i = 0; i < oddFruit.length; i++) {
  oddFruit[i].style.backgroundColor = "lightgrey";
}

let evenFruit = document.querySelectorAll(".fruit:nth-child(even)");
for (let i = 0; i < evenFruit.length; i++) {
  evenFruit[i].style.color = "white";
  evenFruit[i].style.backgroundColor = "brown";
}
