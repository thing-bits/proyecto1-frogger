//var frogMovementSound = new Audio('../sfx/jump_sound.wav');
//var squashedFrog = new Audio('../sfx/squased.wav')
let pos = 0
// se crea una rana
const frog = new Frog();

// se crea un vehículo
const cars_lane_0 = [];
const cars_lane_1 = [];
const cars_lane_2 = [];
const cars_lane_3 = [];
const cars_lane_4 = [];
const cars_lane_5 = [];
const cars_lane_6 = [];
const cars_lane_7 = [];

// Se crea la función del juego
function startGame() {
  setInterval(function () {
    if (frog.pos.top <= -400) {
      winGame();
    }
    if (detectCollision(frog)) {
      // clearInterval(timerId);
      // squashedFrog.play()
      gameOver();
      //div gameOver displayHidden
    }

    if (cars_lane_0.length < 3) {
      //create a new car if array emptyCells:
      cars_lane_0.unshift(new Vehicle(pos, "car2", "road-0"));
      pos -= 150
      console.log(pos)
    }
    for (let i = 0; i < cars_lane_0.length; i++) {
      if (cars_lane_0[i].pos.left >= 200) {
        //eliminate the car when outside the canva
        cars_lane_0.splice(cars_lane_0[i], 1);
        cars_lane_0.unshift(new Vehicle(pos, "car2", "road-0"));
      }
      //for the car apply the move()
      cars_lane_0[i].move("right");
    }

  }, 20);
}
// Se iniica el juego
startGame();

// frog movement
window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp") {
    if (frog.squashed === false) {
      // frogMovementSound.play();
      frog.moveUp();
    }
  }

  if (event.code === "ArrowDown") {
    if (frog.squashed === false) {
      // frogMovementSound.play();
      frog.moveDown();
    }
  }

  if (event.code === "ArrowLeft") {
    if (frog.squashed === false) {
      // frogMovementSound.play();
      frog.moveLeft();
    }
  }

  if (event.code === "ArrowRight") {
    if (frog.squashed === false) {
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
  const gameOverBox = document.querySelector("#tudo");
  gameOverBox.classList.remove("showGameOver");
  gameOverBox.classList.add("heartbeat");

  const grayScaleGZ = document.querySelector("#game-zone");
  grayScaleGZ.classList.add("filter");
}

function winGame() {}
