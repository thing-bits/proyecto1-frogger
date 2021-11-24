const frog = new Frog();
const car = new Vehicle();

function startGame() {
  car.move();
  
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
startGame();
