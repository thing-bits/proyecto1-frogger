function Vehicle() {
    this.road = document.querySelector('#road-0')
    this.html = document.querySelector('.car')
    this.pos = {
        left: 0,
        top: 3,
    }
    this.move = function () {
        let id = null;
        let pos = -300;
        clearInterval(id);
        id = setInterval(frame, 20);
        function frame() {
            if (pos >= 800) {
                clearInterval(id);
                car.road.removeChild(car.html);
            } else {
                pos += 3;
                car.html.style.left = pos + 'px';
            }
        }
    }
}