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
  let worldSize = 20;
  for (let row = 0; row < worldSize; row++) {
    let matrix = [];
    matrix[row] = [];
    for (let col = 0; col < worldSize; col++) {
      matrix[row][col] = document.createElement("div");
      matrix[row][col].setAttribute("data-row", row);
      matrix[row][col].setAttribute("data-col", col);
      matrix[row][col].classList.add("tile");
      gameWorld.appendChild(matrix[row][col]);
    }
  }
}
startBtn.addEventListener("click", startGame);
