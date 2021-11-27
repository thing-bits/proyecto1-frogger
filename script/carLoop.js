function CarLoop() {
  this.loop = function () {
    while (cars_lane_0.length < 4) {
      //create a new car if array empty
      cars_lane_0.push(new Vehicle(pos, "car2", "road-0"));
      pos -= 160;
    }
    pos = 0;

    for (let i = 0; i < cars_lane_0.length; i++) {
      if (cars_lane_0[i].pos.left >= 650) {
        //eliminate the car when outside the canva
        cars_lane_0.splice(cars_lane_0[i], 1);

        this.road = document.querySelector("#road-0");
        this.car = document.querySelector(".car2");
        this.road.removeChild(this.car);
      }
      //for the car apply the move()
      cars_lane_0[i].move("right");
    }
  };
}
