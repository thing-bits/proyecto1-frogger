// Función para crear el vehículo con velocidad personalizada
function Vehicle(pos = -200, model, road) {
  this.pos = {
    left: pos,
    top: 3,
  };
  



  this.road = document.querySelector(`#${road}`);
  this.car = document.createElement("div");
  this.car.style.left = this.pos.left + "px";
  this.road.appendChild(this.car);

  // Movimento y dirección del coche
  this.move = function (direction) {
    switch (direction) {
      case "right":
        switch (road) {
          case "road-0":
            this.car.setAttribute("class", 'bigTruck' + " vehicle");
            this.pos.left += 5;
            break;
          case "road-1":
            this.car.setAttribute("class", model + " vehicle");
            this.pos.left += 8;
            break;
          case "road-2":
            this.car.setAttribute("class", model + " vehicle");
            this.pos.left += 4;
            break;
          case "road-3":
            this.car.setAttribute("class", model + " vehicle");
            this.pos.left += 5;
            break;
          case "road-4":
            this.car.setAttribute("class", model + " vehicle");
            this.pos.left += 3;
            break;
          case "road-5":
            this.car.setAttribute("class", model + " vehicle");
            this.pos.left += 7;
            break;
          case "road-6":
            this.car.setAttribute("class", model + " vehicle");
            this.pos.left += 4;
            break;
          case "road-7":
            this.car.setAttribute("class", model + " vehicle");
            this.pos.left += 5;
            break;
        }
        // this.pos.left += 10;
        this.car.style.left = this.pos.left + "px";
        break;
      case "left":
        this.pos.left -= 1;
        this.car.style.left = this.pos.left + "px";
        break;
    }
  };
}
