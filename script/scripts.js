// se crea una rana
const frog = new Frog();

// se crea un vehículo
const cars_lane_1 = [];
cars_lane_1[0] = new Vehicle();
cars_lane_1[1] = new Vehicle(-250);

// Se crea la función del juego
function startGame() {
  let timerId = setInterval(function () {
    // Se llama a la función para mover el vehículo
    cars_lane_1[0].move();
    cars_lane_1[1].move();
    if (detectCollision(frog)) {
      // clearInterval(timerId);
      alert("GameOver");
      //div gameOver displayHidden
    }
  }, 100);
}
// Se iniica el juego
startGame();

// frog movement
window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp") {
    if (frog.squashed === false) {
      frog.moveUp();
    }
  }

  if (event.code === "ArrowDown") {
    if (frog.squashed === false) {
      frog.moveDown();
    }
  }

  if (event.code === "ArrowLeft") {
    if (frog.squashed === false) {
      frog.moveLeft();
    }
  }

  if (event.code === "ArrowRight") {
    if (frog.squashed === false) {
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
