//Jumper
var Jumper = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};
Jumper.prototype = Object.create(makeDancer.prototype);
Jumper.prototype.constructor = Jumper;

Jumper.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  let timeBetweenJump = this.timeBetweenSteps / 2;
  //jump
  setTimeout(this.setPosition.bind(this, this.top - 50, this.left), timeBetweenJump);
  //fall
  setTimeout(this.setPosition.bind(this, this.top, this.left), timeBetweenJump * 2);
};