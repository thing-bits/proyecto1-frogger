function carLoop() {
  for (let i = 0; i < cars_lane.length; i++) {
    while (cars_lane[i].length < 2) {
      //create a new car if array empty
      cars_lane[i].push(new Vehicle(pos, "car2", `road-${i}`));
      pos -= 160;
    }
    pos = 0;

    for (let j = 0; j < cars_lane[i].length; j++) {
      //for the car apply the move()
      cars_lane[i][j].move("right");

      if (cars_lane[i][0].pos.left >= 650) {
        //eliminate the car when outside the canva
        const droppedCar = cars_lane[i].shift();

        this.road = document.querySelector(`#road-${i}`);
        this.road.removeChild(droppedCar.car);
        j--;
      }
    }
  }
}
