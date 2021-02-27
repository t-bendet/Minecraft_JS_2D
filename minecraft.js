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
  comp: {
    main: "sky",
    element1: {
      el: "earth",
      remover: "shovel",
    },
    element2: {
      el: "stone",
      remover: "pickaxe",
    },
    element3: {
      el: "tree",
      remover: "axe",
    },
    element4: {
      el: "grass",
      remover: "mower",
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
  let myIntializeElemnts = intializeElemnts.bind(this);
  myIntializeElemnts();
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
      console.log(i);
      console.log(v);
      let tool = document.createElement("div");
      tool.classList.add(v.remover);
      tool.classList.add("tool-box");
      tools.appendChild(tool);
      let element = document.createElement("div");
      element.classList.add(v.el);
      element.classList.add("elements-box");
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
  backToMenu.innerText = "back to menu";
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
function intializeElemnts() {
  //TODO add stones grass and clouds
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
