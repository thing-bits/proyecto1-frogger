function Frog() {
  this.squashed = false;
  this.nestReached = false;
  this.start = null;
  this.frog = null;
  // this.frog.setAttribute("id", "frog");
  // this.start.appendChild(this.frog);
  this.pos = null;
  this.direction = null;

  this.create = function () {
    this.squashed = false;
    this.start = document.querySelector("#start");
    this.frog = document.createElement("div");
    this.frog.setAttribute("id", "frog");
    this.start.appendChild(this.frog);
    this.pos = {
      left: 370,
      top: 7,
    };
  };

  this.clear = function () {
    this.start.removeChild(this.frog);
  };
  //set canvas limit

  this.moveUp = function () {
    if (this.pos.top > -543) {
      this.pos.top -= 55;
      this.frog.style.top = `${this.pos.top}px`;
    }
  };

  this.moveDown = function () {
    if (this.pos.top < 7) {
      this.pos.top += 55;
      this.frog.style.top = `${this.pos.top}px`;
    }
  };

  this.moveLeft = function () {
    if (this.pos.left > 40) {
      this.pos.left -= 55;
      this.frog.style.left = `${this.pos.left}px`;
    }
  };

  this.moveRight = function () {
    if (this.pos.left < 700) {
      this.pos.left += 55;
      this.frog.style.left = `${this.pos.left}px`;
    }
  };
}
