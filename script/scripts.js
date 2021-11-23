const frog = {
    html: document.querySelector('#frog'),
    pos: {
        left: 370,
        top: 5,
    },
    moveUp() {
        this.pos.top -= 105;
        this.html.style.top = `${this.pos.top}px`
    },

    moveDown() {
        this.pos.top += 105;
        this.html.style.top = `${this.pos.top}px`
    },

    moveLeft() {
        this.pos.left -= 105;
        this.html.style.left = `${this.pos.left}px`
    },

    moveRight() {
        this.pos.left += 105;
        this.html.style.left = `${this.pos.left}px`
    }
}

/* function Vehicle(speed, color) {
    this.speed = speed;
    this.color = color;
} */

const car = {
    road: document.querySelector('#road-0'),
    html: document.querySelector('.car'),
    pos: {
        left: 0,
        top: 3,
    },
     carMove() {
        let id = null;
        let pos = -300;
        clearInterval(id);
        id = setInterval(frame, 1);
        function frame() {
            if (pos >= 800) {
                clearInterval(id);
                car.road.removeChild(car.html);
            } else {
                pos+= 3;
                car.html.style.left = pos + 'px';
            }
        }
    },
}
car.carMove()

window.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowUp') {
        frog.moveUp()
    }

    if (event.code === 'ArrowDown') {
        frog.moveDown()

    }

    if (event.code === 'ArrowLeft') {
        frog.moveLeft()
    }

    if (event.code === 'ArrowRight') {
        frog.moveRight()
    }
})

