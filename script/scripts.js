function mute() {
  introMusic.pause();
}
// SOUNDS
var introMusic = new Audio("../sfx/startSound/introMusic.mp3");
var frogMovementSound = new Audio("../sfx/jumpSound/jump.flac");
// var squashedFrog = new Audio('../sfx/squased.wav')
// SOUNDS
let posL = 0; // initial position of cars
let posR = 0; // initial position of cars
let lives = 3; // number of lives

const startGameBox = document.querySelector("#startWindow"); // point the selector for Start Game window
const side1 = document.querySelector("#lives");
const side2 = document.querySelector("#timer");
const side3 = document.querySelector("#moveExplain");

const cars_lane = []; // array for every lanes/roads in where the cars going to be storage
cars_lane[0] = [];
cars_lane[1] = [];
cars_lane[2] = [];
cars_lane[3] = [];
cars_lane[4] = [];
cars_lane[5] = [];
cars_lane[6] = [];
cars_lane[7] = [];

const frog = new Frog(); // create a new instance of frog

function startGame() {
  introMusic.play();

  // this will start the magic
  side1.classList.remove("hide");
  side2.classList.remove("hide");
  side3.classList.remove("hide");

  startGameBox.classList.add("hideStartGame"); // this will hide the Start Game window

  frog.create(); // this will create a frog
  startTimer(); // this will start timer function

  setInterval(function () {
    reachNest();
    if (detectCollision(frog)) {
      // squashedFrog.play()
      if (lives === 1) {
        gameOver(); // every interval check if lose
        const addDeadFrogImg2 = document.querySelector("#lives_2"); // point the selector to dead frog img
        addDeadFrogImg2.classList.remove("lives_img");
        addDeadFrogImg2.setAttribute("class", "dead_lives");
        clearInterval(timerInterval); // stop the timer if loose the game
      } else {
        lives--;
        frog.clear(); // clean a dead frog from the map
        frog.create(); // create a new frog at the beggining
      }
    }
    if (lives === 2) {
      const addDeadFrogImg0 = document.querySelector("#lives_0");
      addDeadFrogImg0.classList.remove("lives_img");
      addDeadFrogImg0.setAttribute("class", "dead_lives");
    }
    if (lives === 1) {
      const addDeadFrogImg1 = document.querySelector("#lives_1");
      addDeadFrogImg1.classList.remove("lives_img");
      addDeadFrogImg1.setAttribute("class", "dead_lives");
    }
    carLoop(); // It starts the car loop
  }, 50);
}

const moveOnceKeyPressed = document.querySelector("#start");

// frog movement
window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp") {
    if (frog.squashed === false) {
      frogMovementSound.pause();
      frogMovementSound.currentTime = 0;
      frogMovementSound.play();
      frogMovementSound.volume = 0.2;
      frog.moveUp();
    }
  }

  if (event.code === "ArrowDown") {
    if (frog.squashed === false) {
      frogMovementSound.pause();
      frogMovementSound.currentTime = 0;
      frogMovementSound.play();
      frogMovementSound.volume = 0.2;
      frog.moveDown();
    }
  }

  if (event.code === "ArrowLeft") {
    if (frog.squashed === false) {
      frogMovementSound.pause();
      frogMovementSound.currentTime = 0;
      frogMovementSound.play();
      frogMovementSound.volume = 0.2;
      frog.moveLeft();
    }
  }

  if (event.code === "ArrowRight") {
    if (frog.squashed === false) {
      frogMovementSound.pause();
      frogMovementSound.currentTime = 0;
      frogMovementSound.play();
      frogMovementSound.volume = 0.2;
      frog.moveRight();
    }
  }
});

// check for collapsed function
function detectCollision(frog) {
  let cars = document.querySelectorAll(".vehicle");
  let frogDimension = frog.frog.getBoundingClientRect();
  for (let i = 0; i < cars.length; i++) {
    let carDimension = cars[i].getBoundingClientRect();
    // it checks if the dimension of a car collides with the frog
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
  // it shows the time is up window
  const gameOverBox = document.querySelector("#losWindowTime");
  gameOverBox.classList.remove("showGameOver");
  gameOverBox.classList.add("heartbeat");

  //focus the yes button when lose
  document.querySelector("#autoFocus").focus();

  const grayScaleGZ = document.querySelector("#game-zone");
  grayScaleGZ.classList.add("filter");
}

// this storages the frog when it reaches the nest
const reachedNest = [false, false, false, false, false];

function reachNest() {
  if (frog.pos.top <= -540 && frog.pos.left >= 140 && frog.pos.left <= 187) {
    if (reachedNest[0] === false) {
      reachedNest[0] = true;
      const addFrogImg = document.querySelector("#nest0");
      addFrogImg.setAttribute("class", "frog");
      winGame();
    }
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
// it checks if the nests have been reached
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
