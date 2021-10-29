const likeBtn = document.querySelector(".likeBtn");
const output = document.querySelector(".output");

likeBtn.addEventListener("click", incrementNumber);

let count = 0;
let wordCount = [];
function incrementNumber() {
  count = count + 1;
  output.innerHTML += count;
}
