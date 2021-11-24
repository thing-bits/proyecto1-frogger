function timerId(time) {
  let self = this;
  const timerId = setInterval(this.move, time);
  if (self.pos.left >= 700) {
    clearInterval(timerId);
  }
}
function Vehicle() {
  let self = this;
  this.road = document.querySelector("#road-0");
  this.html = document.querySelector(".car");
  this.pos = {
    left: -250,
    top: 3,
  };
  
  
  this.move = function () {
    self.pos.left += 10;
    self.html.style.left = self.pos.left + "px";
  };
  setInterval(this.move,50)
};
  