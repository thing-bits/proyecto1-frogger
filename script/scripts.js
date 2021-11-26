var frogMovementSound = new Audio('../sfx/jump_sound.wav');
var squashedFrog = new Audio('../sfx/squased.wav')
  

// se crea una rana
const frog = new Frog();

// se crea un vehículo
const cars_lane_1 = [];
cars_lane_1[0] = new Vehicle();
cars_lane_1[1] = new Vehicle(-300);
cars_lane_1[2] = new Vehicle(-500);
cars_lane_1[3] = new Vehicle(-700);
cars_lane_1[4] = new Vehicle(-900);

// Se crea la función del juego
function startGame() {
  setInterval(function () {
    if (frog.pos.top <= -400) {
      winGame();
    }
    if (detectCollision(frog)) {
      // clearInterval(timerId);
      squashedFrog.play()
      gameOver();
      //div gameOver displayHidden
    }
    cars_lane_1[0].move();
    cars_lane_1[1].move();
    cars_lane_1[2].move();
    cars_lane_1[3].move();
    cars_lane_1[4].move();

    if (cars_lane_1[0].pos.left >= 700) {
      console.log("works0");
    }
    if (cars_lane_1[1].pos.left >= 700) {
      console.log("works1");
    }
  }, 10);
}
// Se iniica el juego
startGame();

// frog movement
window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp") {
    if (frog.squashed === false) {
      frogMovementSound.play();
      frog.moveUp();
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
  let cars = document.querySelectorAll(".car");
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

function winGame() {

}
