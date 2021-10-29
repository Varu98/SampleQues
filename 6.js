const addBtn = document.querySelector(".addBtn");
const subBtn = document.querySelector(".subBtn");
const divBtn = document.querySelector(".divBtn");
const multiBtn = document.querySelector(".multiBtn");

const output = document.querySelector(".output");
const input = document.querySelectorAll(".input");

function addNumbers() {
  let sum = parseInt(input[0].value) + parseInt(input[1].value);
  output.innerHTML = sum;
}
function subNumbers() {
  let sum = parseInt(input[0].value) - parseInt(input[1].value);
  output.innerHTML = sum;
}
function divNumbers() {
  let sum = parseInt(input[0].value) / parseInt(input[1].value);
  output.innerHTML = sum;
}
function multiNumbers() {
  let sum = parseInt(input[0].value) * parseInt(input[1].value);
  output.innerHTML = sum;
}

addBtn.addEventListener("click", addNumbers);
subBtn.addEventListener("click", subNumbers);
multiBtn.addEventListener("click", multiNumbers);
divBtn.addEventListener("click", divNumbers);
