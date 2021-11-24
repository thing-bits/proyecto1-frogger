// se crea una rana
const frog = new Frog();

// se crea un vehículo
const car = new Vehicle(50);

// Se crea la función del juego
function startGame() {

  timerId = setInterval(function () {
    // Se llama a la función para mover el vehículo
    car.move();

  }, 100)

}

// Se iniica el juego
startGame();


/*this.collapse = function()
Poner z-index para sobreponer el coche a la rana
frog.isCollaps() */