function Frog() {
  let self = this;
  this.collisionDetectedUp = false;
  this.collisionDetectedDown = false;
  this.collisionDetectedRight = false;
  this.collisionDetectedLeft = false;
  this.start = document.querySelector('#start')
  this.frog = document.createElement('div')
  this.frog.setAttribute('id', 'frog')
  this.start.appendChild(this.frog)
  //this.frog = document.querySelector("#frog");
  this.pos = {
    left: 370,
    top: 5,
  };
  this.direction = null;
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
    //var rana = document.querySelector("#frog"); // modificado por self.frog 2 lineas abajo
    var coche = document.querySelector(".car");
    var frogDimension = self.frog.getBoundingClientRect();
    var carDimension = coche.getBoundingClientRect();

      if (
        frogDimension.left < carDimension.left + carDimension.width &&
        frogDimension.left + frogDimension.width > carDimension.left &&
        frogDimension.top < carDimension.top + carDimension.height &&
        frogDimension.top + frogDimension.height > carDimension.top
      ) {
        this.collisionDetectedUp = true;
        console.log('choca', this.collisionDetectedUp)
     
      } else {
        this.collisionDetectedUp = false;
      }
  }
}
    // en memoria de Juan Pablo
    /* if (direction === "down") {
      if (
        frogDimension.left < carDimension.left + carDimension.width &&
        frogDimension.left + frogDimension.width > carDimension.left &&
        frogDimension.top + 105 < carDimension.top + carDimension.height &&
        frogDimension.top + 105 + frogDimension.height > carDimension.top
      ) {
        this.collisionDetectedDown = true;
        //alert("perdiste!");
        //Cambia fotograma a muerta
        self.frog.classList.add("dead");
      } else {
        this.collisionDetectedDown = false;
      }
    }
    if (direction === "left") {
      if (
        frogDimension.left - 105 < carDimension.left + carDimension.width &&
        frogDimension.left - 105 + frogDimension.width > carDimension.left &&
        frogDimension.top < carDimension.top + carDimension.height &&
        frogDimension.top + frogDimension.height > carDimension.top
      ) {
        this.collisionDetectedLeft = true;
        //alert("perdiste!");
        //Cambia fotograma a muerta
        self.frog.classList.add("dead");
      } else {
        this.collisionDetectedLeft = false;
      }
    }
    if (direction === "right") {
      if (
        frogDimension.left + 105 < carDimension.left + carDimension.width &&
        frogDimension.left + 105 + frogDimension.width > carDimension.left &&
        frogDimension.top < carDimension.top + carDimension.height &&
        frogDimension.top + frogDimension.height > carDimension.top
      ) {
        this.collisionDetectedRight = true;
        //alert("perdiste!");
        //Cambia fotograma a muerta
        self.frog.classList.add("dead");
      } else {
        this.collisionDetectedRight = false;
      }
    }
  }
}
 
*/