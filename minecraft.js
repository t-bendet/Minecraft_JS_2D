// landin page btn event listner
const body = document.querySelector("body");
const startBtn = document.querySelector(".start");

const gameContent = document.querySelector("#game");

const gameWorld = document.querySelector("#game__world");

const gameInventory = document.querySelector("#game__inventory");

function startGame() {
  body.firstElementChild.remove();
  gameContent.classList.add("game-content");
  gameWorld.classList.add("game-content__world");
  gameInventory.classList.add("game-content__inventory");
  let worldrow = 23;
  for (let row = 0; row < worldrow; row++) {
    let worldcol = 40;
    let matrix = [];
    matrix[row] = [];
    for (let col = 0; col < worldcol; col++) {
      matrix[row][col] = document.createElement("div");
      matrix[row][col].style["grid-area"] = `${row + 1} / ${col + 1} / ${
        row + 2
      } / ${col + 1}`;
      matrix[row][col].classList.add("tile");
      if (row < 13) {
        matrix[row][col].classList.add("sky");
      } else if (row < 14) {
        matrix[row][col].classList.add("grass");
      } else {
        matrix[row][col].classList.add("earth");
      }
      gameWorld.appendChild(matrix[row][col]);
    }
  }
}
startBtn.addEventListener("click", startGame);
