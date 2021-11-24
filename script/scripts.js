// se crea una rana
const frog = new Frog();

// se crea un vehículo
const car = new Vehicle(50);

// Se crea la función del juego
function startGame() {

  // Se llama a la función para mover el vehículo
  car.move();

}

// Se iniica el juego
startGame();

timerId = setInterval (startGame, 100)

