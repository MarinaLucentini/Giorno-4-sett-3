const generateCell = (num) => {
  for (let i = 0; i < num; i++) {
    const cell = document.createElement("div");
    const numCell = document.createElement("p");
    const conteiner = document.getElementById("Area-tabellone");
    conteiner.style = "display: block";
    conteiner.appendChild(cell);
    cell.appendChild(numCell);
    numCell.innerText = i + 1;
    cell.classList.add("celle-style");
    numCell.classList.add("celle-style-h3");
  }
};
generateCell(99);
const btn = document.getElementById("extract-number");
const numCell = document.querySelectorAll(".celle-style-h3");
const cell = document.querySelectorAll(".celle-style");
const h1 = document.getElementsByTagName("h1")[0];
let randomNumber = 0;
btn.addEventListener("click", (event) => {
  randomNumber = Math.floor(Math.random() * 100);
  h1.innerText = randomNumber;
});
