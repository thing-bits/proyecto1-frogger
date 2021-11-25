function Vehicle(speed, size) {
  let self = this;
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

  // this.move = function () {
  //   self.pos.left += 1;
  //   self.vehicle.style.left = `${self.pos.left}px`;
  // };
}
