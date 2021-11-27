// Función para crear el vehículo con velocidad personalizada
function Vehicle(pos = -150, model, road, direction) {
  this.pos = {
    left: pos,
    top: 3,
  };
  this.road = document.querySelector(`#${road}`);
  this.car = document.createElement("div");
  this.car.setAttribute("class", model + " vehicle");
  this.car.style.left = this.pos.left + "px";
  this.road.appendChild(this.car);
  // Movimento y dirección del coche
  this.move = function (direction) {
    switch (direction) {
      case 'right':
        this.pos.left += 1;
        this.car.style.left = this.pos.left + "px";
        // if (this.pos.left >= 200) { //eliminte the div when 600px or more
        //   this.road.removeChild(this.car);
        // }
        break;
      case 'left':
        this.pos.left -= 1;
        this.car.style.left = this.pos.left + "px";
        break;
    }
  };
}


/* function Vehicle(pos = -100, model) {
  this.pos = {
    left: pos,
    top: 3,
  };
  this.road0 = document.querySelector("#road-0");
  this.car = document.createElement("div");
  this.car.setAttribute("class", model);
  this.car.style.left = this.pos.left + "px";
  this.road0.appendChild(this.car);
  // this.speed = speed;

  this.move = function () {
    this.pos.left += 1;
    this.car.style.left = this.pos.left + "px";
  };
}
 */