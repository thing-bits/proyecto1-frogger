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
  speed: 10,
};
const car_1 = {
  html: document.querySelector(".car-1"),
  speed: 7,
};
const car_2 = {
  html: document.querySelector(".car-2"),
  speed: 5,
};
const car_3 = {
  html: document.querySelector(".car-3"),
  speed: 2,
};


let left = -250;
let right = -250;

function moveVehicleEven() {
  left += 1;
  car_0.html.style.left = `${left}px`;
  car_2.html.style.left = `${left}px`;
}

function moveVehicleOdd() {
    right += 1;
    car_1.html.style.right = `${right}px`;
    car_3.html.style.right = `${right}px`;
    if (right === 1000) {
        console.log('alo')
    }
}

const timerIdEven = setInterval(moveVehicleEven, car_2.speed);
const timerIdOdd = setInterval(moveVehicleOdd, car_3.speed);

setTimeout(clearInterval, 6000, timerIdEven);
setTimeout(clearInterval, 5000, timerIdOdd);

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
