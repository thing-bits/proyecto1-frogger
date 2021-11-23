const frog = {
    html: document.querySelector('#frog'),
    pos: {
        left: 370,
        top: 5,
    },
    moveUp() {
        this.pos.top -= 30;
        this.html.style.top = `${this.pos.top}px`
    },

    moveDown() {
        this.pos.top += 30;
        this.html.style.top = `${this.pos.top}px`
    },

    moveLeft() {
        this.pos.left -= 30;
        this.html.style.left = `${this.pos.left}px`
    },

    moveRight() {
        this.pos.left += 30;
        this.html.style.left = `${this.pos.left}px`
    }
}

const car = {
    html: document.querySelector('.car'),
    pos: {
        left: 0,
        top: 3,
    },
    
}

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

