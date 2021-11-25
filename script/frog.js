function Frog() {
  let self = this;
  this.start = document.querySelector("#start");
  this.frog = document.createElement("div");
  this.frog.setAttribute("id", "frog");
  this.start.appendChild(this.frog);
  this.pos = {
    left: 390,
    top: 50,
  };

  this.moveUp = function () {
    this.pos.top -= 105;
    this.frog.style.top = `${this.pos.top}px`;
    isCollapsed(); // check for collapsed
  };

  this.moveDown = function () {
    this.pos.top += 105;
    this.frog.style.top = `${this.pos.top}px`;
    isCollapsed(); // check for collapsed
  };

  this.moveLeft = function () {
    this.pos.left -= 105;
    this.frog.style.left = `${this.pos.left}px`;
    isCollapsed(); // check for collapsed
  };

  this.moveRight = function () {
    this.pos.left += 105;
    this.frog.style.left = `${this.pos.left}px`;
    isCollapsed(); // check for collapsed
  };

  window.addEventListener("keydown", function (event) {
    if (event.code === "ArrowUp") {
      self.moveUp();
    }

    if (event.code === "ArrowDown") {
      self.moveDown();
    }

    if (event.code === "ArrowLeft") {
      self.moveLeft();
    }

    if (event.code === "ArrowRight") {
      self.moveRight();
    }
  });

  function isCollapsed() {
    // check for collapsed function
    var vehicle = document.querySelector(".car-0");
    var frogDimension = self.frog.getBoundingClientRect();
    var vehicleDimension = vehicle.getBoundingClientRect();

    if (
      frogDimension.left < vehicleDimension.left + vehicleDimension.width &&
      frogDimension.left + frogDimension.width > vehicleDimension.left &&
      frogDimension.top < vehicleDimension.top + vehicleDimension.height &&
      frogDimension.top + frogDimension.height > vehicleDimension.top
    ) {
      // console.log("MUERTA LA RANA");
      //Cambia fotograma a muerta
      self.frog.classList.add("dead");
    } else {
      // console.log("not collapsed");
    }
  }
}
