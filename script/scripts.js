const car = new Vehicle(5, 90);
const frog = new Frog();
const mov = new Move();

function playFrogger() {
  car.drawVehicle();
}

function startGame() {
  car.move();
  // frog.move()
}

// function buttonStartGame() {
timerId = setInterval(startGame, 10);
// }

playFrogger();
