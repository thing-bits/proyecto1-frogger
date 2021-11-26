// Función para crear el vehículo con velocidad personalizada
function Vehicle(pos = -100) {
  this.pos = {
    left: pos,
    top: 3,
  };
  this.road0 = document.querySelector("#road-0");
  this.car = document.createElement("div");
  this.car.setAttribute("class", "car");
  this.car.style.left = this.pos.left + "px";
  this.road0.appendChild(this.car);
  // this.speed = speed;

  this.move = function () {
    this.pos.left += 1;
    this.car.style.left = this.pos.left + "px";
  };
}
