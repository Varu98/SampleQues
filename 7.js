const fetchBtn = document.querySelector(".fetch");
const outputDiv = document.querySelector(".output");
const URL = "https://mystery-api.kushanksriraj.repl.co/get";

fetchBtn.addEventListener("click", fetchError);

function fetchError() {
  fetch(URL).then((response) => {
    console.log(response.status);
    if (response.status === 404) {
      outputDiv.innerHTML = "page not found";
    } else if (response.status === 401) {
      outputDiv.innerHTML = "you are not logged in";
    } else if (response.status === 200) {
      outputDiv.innerHTML = "Succesful";
    }
  });
}
