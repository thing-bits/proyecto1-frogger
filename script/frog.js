function Frog() {
  let self = this;
  this.collisionDetectedUp = false;
  this.collisionDetectedDown = false;
  this.collisionDetectedRight = false;
  this.collisionDetectedLeft = false;
  this.html = document.querySelector("#frog");
  this.pos = {
    left: 370,
    top: 25,
  };
  this.direction = null;
  this.moveUp = function () {
    this.pos.top -= 105;
    this.html.style.top = `${this.pos.top}px`;
  };

  this.moveDown = function () {
    this.pos.top += 105;
    this.html.style.top = `${this.pos.top}px`;
  };

  this.moveLeft = function () {
    this.pos.left -= 105;
    this.html.style.left = `${this.pos.left}px`;
  };

  this.moveRight = function () {
    this.pos.left += 105;
    this.html.style.left = `${this.pos.left}px`;
  };

  window.addEventListener("keydown", function (event) {
    if (event.code === "ArrowUp") {
      this.direction = "up";
      if (!isCollapsed(this.direction)) {
        if (this.collisionDetectedUp === false) {
          self.moveUp();
        }
      }
    }

    if (event.code === "ArrowDown") {
      this.direction = "down";
      if (!isCollapsed(this.direction)) {
        if (this.collisionDetectedDown === false) {
          self.moveDown();
        }
      }
    }

    if (event.code === "ArrowLeft") {
      this.direction = "left";
      if (!isCollapsed(this.direction)) {
        if (this.collisionDetectedLeft === false) {
          self.moveLeft();
        }
      }
    }

    if (event.code === "ArrowRight") {
      this.direction = "right";
      if (!isCollapsed(this.direction)) {
        if (this.collisionDetectedRight === false) {
          self.moveRight();
        }
      }
    }
  });

  function isCollapsed(direction) {
    // check for collapsed function
    var rana = document.querySelector("#frog");
    var coche = document.querySelector(".car-0");
    var object_1 = rana.getBoundingClientRect();
    var object_2 = coche.getBoundingClientRect();
    if (direction === "up") {
      if (
        object_1.left < object_2.left + object_2.width &&
        object_1.left + object_1.width > object_2.left &&
        object_1.top - 105 < object_2.top + object_2.height &&
        object_1.top - 105 + object_1.height > object_2.top
      ) {
        this.collisionDetectedUp = true;
        alert('perdiste!')
        //Cambia fotograma a muerta 
        //Elimina la rana al chocar

      } else {
        this.collisionDetectedUp = false;
      }
    }
    if (direction === "down") {
      if (
        object_1.left < object_2.left + object_2.width &&
        object_1.left + object_1.width > object_2.left &&
        object_1.top + 105 < object_2.top + object_2.height &&
        object_1.top + 105 + object_1.height > object_2.top
      ) {
        this.collisionDetectedDown = true;
      } else {
        this.collisionDetectedDown = false;
      }
    }
    if (direction === "left") {
      if (
        object_1.left - 105 < object_2.left + object_2.width &&
        object_1.left - 105 + object_1.width > object_2.left &&
        object_1.top < object_2.top + object_2.height &&
        object_1.top + object_1.height > object_2.top
      ) {
        this.collisionDetectedLeft = true;
      } else {
        this.collisionDetectedLeft = false;
      }
    }
    if (direction === "right") {
      if (
        object_1.left + 105 < object_2.left + object_2.width &&
        object_1.left + 105 + object_1.width > object_2.left &&
        object_1.top < object_2.top + object_2.height &&
        object_1.top + object_1.height > object_2.top
      ) {
        this.collisionDetectedRight = true;
      } else {
        this.collisionDetectedRight = false;
      }
    }
  }
}