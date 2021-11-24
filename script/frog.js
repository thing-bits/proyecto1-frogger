
// Función para crear la rana
function Frog() {
  this.frog = document.querySelector("#frog");
  this.pos = {
    left: 370,
    top: 5,
  };

  // se establece los movimientos de la rana al pulsar las teclas
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

  // Registras las pulsaciones de las teclas y hace mover la rana acorda a ellas
  window.addEventListener("keydown", function (event) {
    if (event.code === "ArrowUp") {
      frog.moveUp();
      console.log(frog.pos.top);
    }
    if (event.code === "ArrowDown") {
      frog.moveDown();
      console.log(frog.pos.top);
    }
    if (event.code === "ArrowLeft") {
      frog.moveLeft();
      console.log(frog.pos.left);
    }
    if (event.code === "ArrowRight") {
      frog.moveRight();
      console.log(frog.pos.left);
    }
  });
}
