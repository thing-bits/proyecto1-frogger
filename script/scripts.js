const car = new Vehicle(1, 150);
const frog = new Frog();
const mov = new Move();

function startGame() {
  timerId = setInterval(function () {
    car.move();
    car.drawVehicle();
  }, 1);
}
startGame();
