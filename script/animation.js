function ObjectsMovement() {
  this.move = function () {
    self.pos.left += 1;
    self.vehicle.style.left = `${self.pos.left}px`;
  };
}
