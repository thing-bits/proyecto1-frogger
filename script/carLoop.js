function carLoop() {
  for (let i = 0; i < cars_lane.length; i+=2) {
    while (cars_lane[i].length < 2) {
      //create a new car if array empty
      cars_lane[i].push(new Vehicle(posL, `road-${i}`));
      posL -= 300;
    }
    posL = 0;

    for (let j = 0; j < cars_lane[i].length; j++) {
      //for the car apply the move()
      cars_lane[i][j].move("right");

      if (cars_lane[i][0].pos.left >= 800) {
        //eliminate the car when outside the canva
        const droppedCarLeft = cars_lane[i].shift();

        this.road = document.querySelector(`#road-${i}`);
        this.road.removeChild(droppedCarLeft.car);
        j--;
      }
    }
  }
  for (let l = 1; l < cars_lane.length; l+=2) {
    while (cars_lane[l].length < 2) {
      //create a new car if array empty
      cars_lane[l].push(new Vehicle(posR, `road-${l}`));
      posR -= 400; // distance between cars
    }
    posR = 0;

    for (let k = 0; k < cars_lane[l].length; k++) {
      //for the car apply the move()
      cars_lane[l][k].move("left");

      if (cars_lane[l][0].pos.right >= 800) {
        //eliminate the car when outside the canva
        const droppedCar = cars_lane[l].shift();

        this.road = document.querySelector(`#road-${l}`);
        this.road.removeChild(droppedCar.car);
        k--;
      }
    }
  }
}


