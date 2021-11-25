function Vehicle(speed, size) {
  this.road0 = document.querySelector("#road-0");
  this.vehicle = document.createElement("div");
  this.vehicle.setAttribute("class", "car-0");
  this.road0.appendChild(this.vehicle);
  this.speed = speed;
  this.size = size;
  this.pos = {
    left: -300,
    right: -300,
  };

  this.drawVehicle = function () {
    this.vehicle.style.width = this.size + "px";
  };

  this.move = function () {
    this.pos.left += 1;
    this.vehicle.style.left = `${this.pos.left}px`;
  };
}
