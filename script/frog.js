function Frog() {
  this.frog = document.querySelector("#frog");
  this.pos = {
    left: 370,
    top: 5,
  };
  this.moveUp = function () {
    this.pos.top -= 105;
    this.frog.style.top = `${this.pos.top}px`;
  };

  this.moveDown = function () {
    this.pos.top += 105;
    this.frog.style.top = `${this.pos.top}px`;
  };

  this.moveLeft = function () {
    this.pos.left -= 105;
    this.frog.style.left = `${this.pos.left}px`;
  };

  this.moveRight = function () {
    this.pos.left += 105;
    this.frog.style.left = `${this.pos.left}px`;
  };
};
