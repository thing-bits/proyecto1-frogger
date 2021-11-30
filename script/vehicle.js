// Función para crear el vehículo con velocidad personalizada
function Vehicle(pos, road) {
  this.pos = {
    left: pos,
    top: 3,
    right: pos,
  };

  this.road = document.querySelector(`#${road}`);
  this.car = document.createElement("div");
  this.road.appendChild(this.car);

  // Movimento y dirección del coche
  this.move = function (direction) {
    switch (direction) {
      case "right":
        switch (road) {
          case "road-0":
            this.car.setAttribute("class", "bigTruck" + " vehicle");
            this.car.style.left = this.pos.left + "px";
            this.pos.left += 3;
            break;
          case "road-2":
            this.car.setAttribute("class", "mercedes" + " vehicle");
            this.car.style.left = this.pos.left + "px";
            this.pos.left += 7;
            break;
          case "road-4":
            this.car.setAttribute("class", "police" + " vehicle");
            this.car.style.left = this.pos.left + "px";
            this.pos.left += 8;
            break;
          case "road-6":
            this.car.setAttribute("class", "orangeCar" + " vehicle");
            this.car.style.left = this.pos.left + "px";
            this.pos.left += 4;
            break;
        }
        this.car.style.left = this.pos.left + "px";
        break;

      case "left":
        switch (road) {
          case "road-1":
            this.car.setAttribute("class", "familiar_left" + " vehicle");
            this.car.style.right = this.pos.right + "px";
            this.pos.right += 2;
            break;
          case "road-3":
            this.car.setAttribute("class", "sedan_left" + " vehicle");
            this.car.style.right = this.pos.right + "px";
            this.pos.right += 3;
            break;
          case "road-5":
            this.car.setAttribute("class", "smallTruck_left" + " vehicle");
            this.car.style.right = this.pos.right + "px";
            this.pos.right += 2;
            break;
          case "road-7":
            this.car.setAttribute("class", "redCar_left" + " vehicle");
            this.car.style.right = this.pos.right + "px";
            this.pos.right += 5;
            break;
        }
        this.car.style.right = this.pos.right + "px";
        break;
    }
  };
}
