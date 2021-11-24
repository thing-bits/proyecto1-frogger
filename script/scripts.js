function playFrogger() {
  const car = new Vehicle(5, 90);
  const frog = new Frog();
  const mov = new Move();
  car.drawVehicle();
  car.move();
}

playFrogger();

// car = x-height:60 * y-width:car.size

// frog = x-height:50 * y-width:50
