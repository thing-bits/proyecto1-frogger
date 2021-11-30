// var frogMovementSound = new Audio("../sfx/jumpSound/jump.flac");
//var squashedFrog = new Audio('../sfx/squased.wav')

let posL = 0;
let posR = 0;

let lives = 3;

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
  frog.create(); //create a frog
  startTimer();
  setInterval(function () {
    reachNest();
    if (detectCollision(frog)) {
      // squashedFrog.play()
      if (lives === 1) {
        gameOver();
        const addDeadFrogImg = document.querySelector("#lives_2");
        addDeadFrogImg.classList.remove("lives_img");
        addDeadFrogImg.setAttribute("class", "dead_lives");
        clearInterval(timerInterval);
      } else {
        lives--;
        frog.clear();
        frog.create();
      }
    }
    if (lives === 2) {
      const addDeadFrogImg = document.querySelector("#lives_0");
      addDeadFrogImg.classList.remove("lives_img");
      addDeadFrogImg.setAttribute("class", "dead_lives");
    }
    if (lives === 1) {
      const addDeadFrogImg = document.querySelector("#lives_1");
      addDeadFrogImg.classList.remove("lives_img");
      addDeadFrogImg.setAttribute("class", "dead_lives");
    }
    carLoop();
  }, 50);
}

const moveOnceKeyPressed = document.querySelector("#start");

// frog movement

window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp") {
    if (frog.squashed === false) {
      // frogMovementSound.pause();
      // frogMovementSound.currentTime = 0;
      // frogMovementSound.play();
      frog.moveUp();
      // this.frog.setAttribute("class", "up");
    }
  }

  if (event.code === "ArrowDown") {
    if (frog.squashed === false) {
      // frogMovementSound.pause();
      // frogMovementSound.currentTime = 0;
      // frogMovementSound.play();
      frog.moveDown();
    }
  }

  if (event.code === "ArrowLeft") {
    if (frog.squashed === false) {
      // frogMovementSound.pause();
      // frogMovementSound.currentTime = 0;
      // frogMovementSound.play();
      frog.moveLeft();
    }
  }

  if (event.code === "ArrowRight") {
    if (frog.squashed === false) {
      // frogMovementSound.pause();
      // frogMovementSound.currentTime = 0;
      // frogMovementSound.play();
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

function gameOver4Time() {
  const gameOverBox = document.querySelector("#losWindowTime");
  gameOverBox.classList.remove("showGameOver");
  gameOverBox.classList.add("heartbeat");

  //focus the yes button when lose
  document.querySelector("#autoFocus").focus();

  const grayScaleGZ = document.querySelector("#game-zone");
  grayScaleGZ.classList.add("filter");
}

const reachedNest = [false, false, false, false, false];

function reachNest() {
  if (frog.pos.top <= -540 && frog.pos.left >= 140 && frog.pos.left <= 187) {
    if (reachedNest[0] === false) {
      reachedNest[0] = true;
      const addFrogImg = document.querySelector("#nest0");
      addFrogImg.setAttribute("class", "frog");
      winGame();
    }
    //reset frog
  } else if (
    frog.pos.top <= -540 &&
    frog.pos.left >= 255 &&
    frog.pos.left <= 300
  ) {
    if (reachedNest[1] === false) {
      reachedNest[1] = true;
      const addFrogImg = document.querySelector("#nest1");
      addFrogImg.setAttribute("class", "frog");
      winGame();
    }
  } else if (
    frog.pos.top <= -540 &&
    frog.pos.left >= 365 &&
    frog.pos.left <= 410
  ) {
    if (reachedNest[2] === false) {
      reachedNest[2] = true;
      const addFrogImg = document.querySelector("#nest2");
      addFrogImg.setAttribute("class", "frog");
      winGame();
    }
  } else if (
    frog.pos.top <= -540 &&
    frog.pos.left >= 375 &&
    frog.pos.left <= 520
  ) {
    if (reachedNest[3] === false) {
      reachedNest[3] = true;
      const addFrogImg = document.querySelector("#nest3");
      addFrogImg.setAttribute("class", "frog");
      winGame();
    }
  } else if (
    frog.pos.top <= -540 &&
    frog.pos.left >= 585 &&
    frog.pos.left <= 630
  ) {
    if (reachedNest[4] === false) {
      reachedNest[4] = true;
      const addFrogImg = document.querySelector("#nest4");
      addFrogImg.setAttribute("class", "frog");
      winGame();
    }
  }
}

function winGame() {
  if (
    reachedNest.filter(function (e) {
      return e;
    }).length === 5
  ) {
    const winGame = document.querySelector("#winWindow");
    winGame.classList.remove("showWinGame");
    winGame.classList.add("heartbeat");
    frog.clear();
    clearInterval(timerInterval);
  } else {
    frog.clear();
    frog.create();
    //carSpeed = carSpeed.map(speed => speed++)
  }
}

//set canvas limits
//lives counter
//
