// Create a web app where I can input a text. Now reverse the text and on clicking the button, show the output.

const input = document.querySelector(".input");
const output = document.querySelector(".output");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let inputValue = input.value;
  console.log(inputValue);
  inputValue = inputValue.split("").reverse().join("");
  output.innerHTML = inputValue;
});
