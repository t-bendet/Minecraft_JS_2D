// landin page btn event listner
const $ = (x) => document.querySelector(x);
const body = $("body");
const startBtn = $(".start");
const create = $(".create");
const lawnMower = $(".lawn");
// data objects
const preSet = {
  gameContent: $("#game"),
  gameContentClass: "game-content",
  gameWorld: $("#game__world"),
  gameWorldClass: "game-content__world",
  gameInventory: $("#game__inventory"),
  gameInventoryClass: "game-content__inventory",
  worldSize: {
    row: 23,
    col: 40,
  },
  clouds: 4,
  rocks: 2,
  trees: 1,
  comp: {
    main: "sky",
    element1: {
      el: "earth",
      remover: "shovel",
      curr: 0,
    },
    element2: {
      el: "rock",
      remover: "pickaxe",
      curr: 0,
    },
    element3: {
      el: "tree",
      remover: "axe",
      curr: 0,
    },
    element4: {
      el: "grass",
      remover: "mower",
      curr: 0,
    },
  },
};

//game functions
//main function
function intializeGame() {
  let myIntializeclass = intializeclass.bind(this);
  myIntializeclass();
  let myIntializeGrids = intializeGrids.bind(this);
  myIntializeGrids();
  let myIntializeClouds = intializeClouds.bind(this);
  myIntializeClouds();
  let myIntializeRocks = intializeRocks.bind(this);
  myIntializeRocks();
  let myIntializeTrees = intializeTrees.bind(this);
  myIntializeTrees();
  let myIntializeEvents = intializeEvents.bind(this);
  myIntializeEvents();
}
//class function
function intializeclass() {
  body.firstElementChild.remove();
  this.gameContent.classList.add(this.gameContentClass);
  this.gameWorld.classList.add(this.gameWorldClass);
  this.gameInventory.classList.add(this.gameInventoryClass);
  const header = document.createElement("h1");
  header.innerText = "inventory";
  header.classList.add("inventory__head");
  this.gameInventory.appendChild(header);
  const tools = document.createElement("div");
  tools.classList.add("inventory__tools");
  this.gameInventory.appendChild(tools);
  const elements = document.createElement("div");
  elements.classList.add("inventory__elements");
  this.gameInventory.appendChild(elements);
  for (const [i, v] of Object.entries(this.comp)) {
    if (i != "main") {
      let tool = document.createElement("div");
      tool.classList.add(v.remover);
      tool.classList.add("tool-box");
      tools.appendChild(tool);
      let element = document.createElement("div");
      element.classList.add(v.el);
      element.classList.add("elements-box");
      element.innerText = 0;
      elements.appendChild(element);
    }
  }
  const btns = document.createElement("div");
  btns.classList.add("inventory__resets");
  this.gameInventory.appendChild(btns);
  const resetWorld = document.createElement("button");
  resetWorld.classList.add("reset-world");
  resetWorld.classList.add("inv-btn");
  resetWorld.innerText = "reset world";
  btns.appendChild(resetWorld);
  const backToMenu = document.createElement("button");
  backToMenu.classList.add("back-to-menu");
  backToMenu.classList.add("inv-btn");
  backToMenu.innerText = "main menu";
  btns.appendChild(backToMenu);
}
//grid and main elements function
function intializeGrids() {
  let worldrow = this.worldSize.row;
  for (let row = 0; row < worldrow; row++) {
    let worldcol = this.worldSize.col;
    let matrix = [];
    matrix[row] = [];
    for (let col = 0; col < worldcol; col++) {
      matrix[row][col] = document.createElement("div");
      matrix[row][col].style["grid-area"] = `${row + 1} / ${col + 1} / ${
        row + 2
      } / ${col + 1}`;
      matrix[row][col].setAttribute("data-row", row + 1);
      matrix[row][col].setAttribute("data-col", col + 1);
      matrix[row][col].classList.add("tile");
      if (row < 13) {
        matrix[row][col].classList.add(this.comp.main);
      } else if (row < 14) {
        matrix[row][col].classList.add(this.comp.element4.el);
      } else {
        matrix[row][col].classList.add(this.comp.element1.el);
      }
      this.gameWorld.appendChild(matrix[row][col]);
    }
  }
}

//added secondry elements
function intializeClouds() {
  const grid = this.gameWorld;
  const numOfCol = this.worldSize.col;
  // make sure there wont be to much clouds for screen width
  const maxClouds = this.clouds > numOfCol / 10 ? numOfCol / 10 : this.clouds;
  let colStart = 2;
  let rowStart = 4;
  let x = 2;
  let y = 8;
  for (let i = 0; i < maxClouds; i++) {
    for (let row = 4; row > 1; row--) {
      for (let col = x; col < y; col++) {
        let curr = grid.querySelector(`[data-col="${col}"][data-row="${row}"]`);
        curr.classList.remove("sky");
        curr.classList.add("cloud");
      }
      x++;
      y--;
    }
    x += 7;
    y += 13;
  }
  //TODO add randomize
}

function intializeRocks() {
  const grid = this.gameWorld;
  const numOfCol = this.worldSize.col;
  // make sure there wont be to much rocks for screen width
  const maxRocks = this.rocks > numOfCol / 10 ? numOfCol / 10 : this.rocks;
  let colStart = 2;
  let rowStart = 4;
  let x = 2;
  let y = 8;
  for (let i = 0; i < maxRocks; i++) {
    for (let row = 13; row > 9; row--) {
      for (let col = x; col < y; col++) {
        let curr = grid.querySelector(`[data-col="${col}"][data-row="${row}"]`);
        curr.classList.remove("sky");
        curr.classList.add("rock");
      }
      x++;
      y--;
    }
    x += 7;
    y += 13;
  }
  //TODO add randomize and improve
}

function intializeTrees() {
  const grid = this.gameWorld;
  const numOfCol = this.worldSize.col;
  // make sure there wont be to much rocks for screen width
  const maxTrees = this.trees > numOfCol / 10 ? numOfCol / 10 : this.trees;
  let colStart = 2;
  let rowStart = 4;
  let x = 33;
  let y = 34;
  for (let i = 0; i < maxTrees; i++) {
    for (let row = 13; row > 9; row--) {
      for (let col = x; col < y; col++) {
        let curr = grid.querySelector(`[data-col="${col}"][data-row="${row}"]`);
        curr.classList.remove("sky");
        curr.classList.add("tree");
      }
    }
  }
  let x2 = 29;
  let y2 = 38;
  for (let i = 0; i < maxTrees; i++) {
    for (let row = 9; row > 6; row--) {
      for (let col = x2; col < y2; col++) {
        let curr = grid.querySelector(`[data-col="${col}"][data-row="${row}"]`);
        curr.classList.remove("sky");
        curr.classList.add("leaves");
        curr.classList.add("tree");
        // find a way to connect axe to leavs also
      }
      x2++;
      y2--;
    }
  }
  // //TODO add randomize and improve
}

//add events function
function intializeEvents() {
  //TODO add events
  this.gameContent.addEventListener("click", eventTest);
}
//game page events listners
function eventTest(e) {
  // console.log(e.target.classList.value.includes("sky"));
}

//landing page event listners
startBtn.addEventListener("click", intializeGame.bind(preSet));
