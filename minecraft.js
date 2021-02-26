// landin page btn event listner
const $ = (x) => document.querySelector(x);
const body = $("body");
const startBtn = $(".start");
const create = $(".create");

const preset = {
  gameContent: $("#game"),
  gameWorld: $("#game__world"),
  gameInventory: $("#game__inventory"),
};
// TODO update class lists and row col to be dinamic
function startGame() {
  console.log(this);
  body.firstElementChild.remove();
  this.gameContent.classList.add("game-content");
  this.gameWorld.classList.add("game-content__world");
  this.gameInventory.classList.add("game-content__inventory");
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
      this.gameWorld.appendChild(matrix[row][col]);
    }
  }
}
startBtn.addEventListener("click", startGame.bind(preset));
create.addEventListener("click", startGame.bind(obj1));

// manipulate classes
// gameWorld.addEventListener("click", (event) => {
//   console.log();
// });
// event.target.classList.value.includes("sky")
