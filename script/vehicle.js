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
    function moveVehicle() {
      self.pos.left += 1;
      self.car_0.vehicle.style.left = `${self.pos.left}px`;
      if (self.pos.left === 800) {
        self.car_0.html.removeChild(self.car_0.vehicle);
      }
    }
    const timerId = setInterval(moveVehicle, self.car_0.speed);

    setTimeout(clearInterval, 12000, timerId);
  };
}
