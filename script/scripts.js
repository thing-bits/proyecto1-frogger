const frog = {
  html: document.querySelector("#frog"),
  pos: {
    left: 370,
    top: 5,
  },
  moveUp() {
    this.pos.top -= 50;
    this.html.style.top = `${this.pos.top}px`;
  },

  moveDown() {
    this.pos.top += 50;
    this.html.style.top = `${this.pos.top}px`;
  },

  moveLeft() {
    this.pos.left -= 50;
    this.html.style.left = `${this.pos.left}px`;
  },

  moveRight() {
    this.pos.left += 50;
    this.html.style.left = `${this.pos.left}px`;
  },
};

const car_0 = {
  html: document.querySelector(".car-0"),
};
const car_1 = {
  html: document.querySelector(".car-1"),
};
const car_2 = {
  html: document.querySelector(".car-2"),
};
const car_3 = {
  html: document.querySelector(".car-3"),
};

//const car = document.querySelector(".car");

let speed = 10;
let speed_1 = 7;
let speed_2 = 5;
let speed_3 = 3
let left = -250;
let right = 0;

function moveVehicleEven() {
  left += 1;
  car_0.html.style.left = `${left}px`;
  car_2.html.style.left = `${left}px`;
}

function moveVehicleOdd() {
    left -= 1;
    
}

const timerIdEven = setInterval(moveVehicleEven, speed);
const timerIdOdd = setInterval(moveVehicleOdd, speed);

setTimeout(clearInterval, 10800, timerIdEven, timerIdOdd);

window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp") {
    frog.moveUp();
  }

  if (event.code === "ArrowDown") {
    frog.moveDown();
  }

  if (event.code === "ArrowLeft") {
    frog.moveLeft();
  }

  if (event.code === "ArrowRight") {
    frog.moveRight();
  }
});
