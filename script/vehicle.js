function Vehicle() {
  let self = this;
  this.road = document.querySelector("#road-0");
  this.html = document.querySelector(".car");
  this.pos = {
    left: -300,
    top: 3,
  };
  this.move = function () {
    // let id = null;
    // clearInterval(id);
    // id = setInterval(frame, 30);
    // function frame() {
    if (self.pos.left >= 300) {
      clearInterval(id);
    } else {
      self.pos.left += 3;
      self.html.style.left = self.pos.left + "px";
    }
    //}
  };
}
