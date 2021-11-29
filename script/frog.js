function Frog() {
  let self = this;
  this.squashed = false;
  this.nestReached = false;
  this.start = document.querySelector("#start");
  this.frog = document.createElement("div");
  this.frog.setAttribute("id", "frog");
  this.start.appendChild(this.frog);
  //this.frog = document.querySelector("#frog");
  this.pos = {
    left: 370,
    top: 7,
  };
  this.direction = null;

  this.moveUp = function () {
    console.log(this.pos.top)
    this.pos.top -= 55;
    this.frog.style.top = `${this.pos.top}px`;
  };

  this.moveDown = function () {
    this.pos.top += 55;
    this.frog.style.top = `${this.pos.top}px`;
  };

  this.moveLeft = function () {
    this.pos.left -= 55;
    this.frog.style.left = `${this.pos.left}px`;
  };

  this.moveRight = function () {
    this.pos.left += 55;
    this.frog.style.left = `${this.pos.left}px`;
  };
}
