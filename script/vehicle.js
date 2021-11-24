
// Función para crear el vehículo con velocidad personalizada
function Vehicle(speed) {
  this.road = document.querySelector("#road-0");
  this.car = document.querySelector(".car");
  this.speed = speed;
  this.pos = {
    left: -250,
    top: 3,
  };

  this.timerId = function () {
    const timerId = setInterval(this.move.bind(this), this.speed);
    if (this.pos.left >= 700) {
      clearInterval(timerId);
    }
  }

  this.move = function () {
    this.pos.left += 10;
    this.car.style.left = this.pos.left + "px";
  };
  this.timerId()
};