function Frog() {
  let self = this;
  this.html = document.querySelector("#frog");
  this.pos = {
    left: 370,
    top: 25,
  };
  this.moveUp = function () {
    this.pos.top -= 105;
    this.html.style.top = `${this.pos.top}px`;
    isCollapsed(); // check for collapsed
  };

  this.moveDown = function () {
    this.pos.top += 105;
    this.html.style.top = `${this.pos.top}px`;
    isCollapsed(); // check for collapsed
  };

  this.moveLeft = function () {
    this.pos.left -= 105;
    this.html.style.left = `${this.pos.left}px`;
    isCollapsed(); // check for collapsed
  };

  this.moveRight = function () {
    this.pos.left += 105;
    this.html.style.left = `${this.pos.left}px`;
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

  function isCollapsed(rana, coche) {
    // check for collapsed function
    var rana = document.querySelector("#frog");
    var coche = document.querySelector(".car-0");
    var object_1 = rana.getBoundingClientRect();
    var object_2 = coche.getBoundingClientRect();

    if (
      object_1.left < object_2.left + object_2.width &&
      object_1.left + object_1.width > object_2.left &&
      object_1.top < object_2.top + object_2.height &&
      object_1.top + object_1.height > object_2.top
    ) {
      console.log("MUERTA LA RANA");
    } else {
      console.log("not collapsed");
    }
  }
}
