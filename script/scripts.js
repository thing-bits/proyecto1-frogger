const frog = new Frog ()

const car = new Vehicle ()

car.move()

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

