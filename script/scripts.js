var frogMovementSound = new Audio("../sfx/jumpSound/jump.flac");
//var squashedFrog = new Audio('../sfx/squased.wav')

let posL = 0;
let posR = 0;

// se crea una rana
const frog = new Frog();

// se crea un vehículo
const cars_lane = [];
cars_lane[0] = [];
cars_lane[1] = [];
cars_lane[2] = [];
cars_lane[3] = [];
cars_lane[4] = [];
cars_lane[5] = [];
cars_lane[6] = [];
cars_lane[7] = [];

// Se crea la función del juego
function startGame() {
  const startGameBox = document.querySelector("#startWindow");
  startGameBox.classList.add("hideStartGame");

  setInterval(function (){
      winGame();
    if (detectCollision(frog)) {
      // squashedFrog.play()
      gameOver();
    }
    carLoop();
  }, 50);
}

const moveOnceKeyPressed = document.querySelector("#start");

// frog movement


window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp") {
    if (frog.squashed === false) {
      frogMovementSound.play();
      frog.moveUp();
      this.frog.setAttribute("class", "up");
    }
  }

  if (event.code === "ArrowDown") {
    if (frog.squashed === false) {
      frogMovementSound.play();
      frog.moveDown();
    }
  }

  if (event.code === "ArrowLeft") {
    if (frog.squashed === false) {
      frogMovementSound.play();
      frog.moveLeft();
    }
  }

  if (event.code === "ArrowRight") {
    if (frog.squashed === false) {
      frogMovementSound.play();
      frog.moveRight();
    }
  }
});

function detectCollision(frog) {
  // check for collapsed function
  let cars = document.querySelectorAll(".vehicle");
  let frogDimension = frog.frog.getBoundingClientRect();

  for (let i = 0; i < cars.length; i++) {
    let carDimension = cars[i].getBoundingClientRect();
    if (
      frogDimension.left < carDimension.left + carDimension.width &&
      frogDimension.left + frogDimension.width > carDimension.left &&
      frogDimension.top < carDimension.top + carDimension.height &&
      frogDimension.top + frogDimension.height > carDimension.top
    ) {
      frog.squashed = true;
      return true;
    }
  }
  return false;
}

function gameOver() {
  const gameOverBox = document.querySelector("#losWindow");
  gameOverBox.classList.remove("showGameOver");
  gameOverBox.classList.add("heartbeat");

  //focus the yes button when lose
  document.querySelector("#autoFocus").focus();

  const grayScaleGZ = document.querySelector("#game-zone");
  grayScaleGZ.classList.add("filter");
}

function winGame() { 
if (frog.pos.top <= -540 && frog.pos.left >= 142 && frog.pos.left <= 187) {
  console.log('nest0')
} else if (frog.pos.top <= -540 && frog.pos.left >= 255 && frog.pos.left <= 300) {
  console.log('nest1')
} else if (frog.pos.top <= -540 && frog.pos.left >= 365 && frog.pos.left <= 410) {
  console.log('nest2')
} else if (frog.pos.top <= -540 && frog.pos.left >= 475 && frog.pos.left <= 520) {
  console.log('nest3')
} else if (frog.pos.top <= -540 && frog.pos.left >= 585 && frog.pos.left <= 630) {
  console.log('nest4')
}
}