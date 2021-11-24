function Vehicle(speed, size) {
  let self = this;
  this.speed = speed;
  this.size = size;
  this.pos = {
    left: -300,
    right: -300,
  };

  this.car_0 = {
    html: document.querySelector("#road-0"),
    vehicle: document.querySelector(".car-0"),
    speed: this.speed,
  };

  this.drawVehicle = function () {
    self.car_0.vehicle.style.width = self.size + "px";
  };

  this.move = function () {
    self.pos.left += 1;
    self.car_0.vehicle.style.left = `${self.pos.left}px`;
  };
}
