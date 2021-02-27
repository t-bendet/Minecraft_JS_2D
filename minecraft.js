// landin page btn event listner
const $ = (x) => document.querySelector(x);
const body = $("body");
const startBtn = $(".start");
const create = $(".create");
const lawnMower = $(".lawn");
// data objects
const preset = {
  gameContent: $("#game"),
  gameWorld: $("#game__world"),
  gameInventory: $("#game__inventory"),
};
//game functions
//TODO braek down all of the main function to parts and var needs to refer to the data object
function intializeGame() {
  let myIntializeclass = intializeclass.bind(this);
  myIntializeclass();
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
  this.gameContent.addEventListener("click", eventTest);
  let mytest = test.bind(this);
  mytest();
}
function intializeclass() {
  body.firstElementChild.remove();
  this.gameContent.classList.add("game-content");
  this.gameWorld.classList.add("game-content__world");
  this.gameInventory.classList.add("game-content__inventory");
}
function intializeGrids() {
  console.log(this.gameContent);
}
function intializeElemnts() {
  console.log(this.gameContent);
}
function intializeEvents() {
  console.log(this.gameContent);
}

//event listners
startBtn.addEventListener("click", intializeGame.bind(preset));

function eventTest(e) {
  console.log(e.target.classList.value.includes("sky"));
}

// create.addEventListener("click", startGame.bind(obj1));
