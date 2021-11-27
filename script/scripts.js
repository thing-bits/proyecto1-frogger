// var frogMovementSound = new Audio("../sfx/jump_sound.wav");
// var squashedFrog = new Audio("../sfx/squased.wav");

// se crea una rana
const frog = new Frog();

// se crea un vehículo
const cars_lane_1 = [];
cars_lane_1[0] = new Vehicle();
cars_lane_1[1] = new Vehicle();


// Se crea la función del juego
function startGame() {
  setInterval(function () {
    if (frog.pos.top <= -400) {
      winGame();
    }
    if (detectCollision(frog)) {
      // clearInterval(timerId);
      // squashedFrog.play();
      gameOver();
      //div gameOver displayHidden
    }

    //Bucle a revisar
    if (cars_lane_1[0].pos.left >= 200) {
      let rem = cars_lane_1.splice(cars_lane_1[0], 1);
      console.log(rem)
      cars_lane_1[1] = new Vehicle();
    }
    
    cars_lane_1[0].move();
    
  }, 10);
}
// Se iniica el juego
startGame();

// frog movement
window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp") {
    if (frog.squashed === false) {
      setTimeout(function () {
        // frogMovementSound.play();
      }, 1);
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

function winGame() {}
