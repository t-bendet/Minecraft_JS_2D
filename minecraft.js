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
      pickup: false,
      pickdown: false,
    },
    element2: {
      el: "rock",
      remover: "pickaxe",
      curr: 0,
      pickup: false,
      pickdown: false,
    },
    element3: {
      el: "tree",
      remover: "axe",
      curr: 0,
      pickup: false,
      pickdown: false,
    },
    element4: {
      el: "grass",
      remover: "mower",
      curr: 0,
      pickup: false,
      pickdown: false,
    },
    element5: {
      el: "leaves",
      remover: "leaf-blower",
      curr: 0,
      pickup: false,
      pickdown: false,
    },
    element6: {
      el: "cloud",
      remover: "wind",
      curr: 0,
      pickup: false,
      pickdown: false,
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
  const Menue = $(".back-to-menu");
  Menue.addEventListener("click", () => {
    location.reload();
  });
  // const Reset = $(".reset-world");
  // Reset.addEventListener("click", () => {
  //   setTimeout(window.location.reload.bind(window.location), 250);
  //   intializeGame.bind(preSet);
  // });
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
        // find a way to connect axe to leavs also
      }
      x2++;
      y2--;
    }
  }
  // //TODO add randomize and improve
}

//game page events listners
preSet.gameContent.addEventListener("click", pickUp.bind(preSet));
preSet.gameContent.addEventListener("click", pickDown.bind(preSet));
//game page events listners functions
function pickUp(e) {
  let currentRemover;
  let removerObj;
  let currentElement;
  //checks if remover was clicked
  let removerClick = e.target.classList.contains("tool-box");
  //store current remover name
  if (removerClick) {
    currentRemover = e.target.classList[0];
    //list of the others removers
    for (const [i, v] of Object.entries(this.comp)) {
      if (i != "main") {
        if (v.remover != currentRemover) {
          v.pickup = false;
        } else {
          v.pickup = true;
          removerObj = v;
        }
      }
    }
  }
  //checks if element was clicked
  elementClick = e.target.classList.contains("tile");
  if (elementClick) {
    //store current element name
    currentElement = e.target.classList.value.replace("tile", "").trim();
    //list of the others elements
    for (const [i, v] of Object.entries(this.comp)) {
      if (i != "main") {
        if (v.el == currentElement) {
          if (v.pickup) {
            e.target.classList.remove(currentElement);
            v.curr += 1;
            const elBox = $(`.inventory__elements .${currentElement}`);
            elBox.innerText = v.curr;
          }
        }
      }
    }
  }
}
function pickDown(e) {
  let adderrObj;

  let adderClick = e.target.classList.contains("elements-box");
  if (adderClick) {
    currentAdder = e.target.classList[0];
    for (const [i, v] of Object.entries(this.comp)) {
      if (i != "main") {
        if (v.el != currentAdder) {
          v.pickdown = false;
        } else {
          v.pickdown = true;
          adderrObj = v;
        }
      }
    }
  }
  elementClick = e.target.classList.contains("tile");
  if (elementClick) {
    currentElement = e.target.classList.value.replace("tile", "").trim();
    for (const [i, v] of Object.entries(this.comp)) {
      if (i != "main") {
        if (v.pickdown) {
          if (v.curr) {
            v.curr -= 1;
            e.target.classList.remove(
              e.target.classList.value.replace("tile", " ").trim()
            );
            e.target.classList.add(v.el);
            const elBox = $(`.inventory__elements .${v.el}`);
            elBox.innerText = v.curr;
          }
        }
      }
    }
  }
}
//landing page event listners
startBtn.addEventListener("click", intializeGame.bind(preSet));
