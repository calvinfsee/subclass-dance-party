//Jumper
var Jumper = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer jumper"><img src="lib/jumper.jpg"></span>');
  this.group = 'jumpers';
  this.groupTop = 500;
  this.groupLeft = 100;
  this.groupOrderTop = 0;
  this.groupOrderLeft = 150;

};
Jumper.prototype = Object.create(makeDancer.prototype);
Jumper.prototype.constructor = Jumper;

Jumper.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  let timeBetweenJump = this.timeBetweenSteps / 2;
  //jump
  setTimeout(this.setPosition.bind(this, this.top - 100, this.left), timeBetweenJump);
  //fall
  setTimeout(this.setPosition.bind(this, this.top, this.left), timeBetweenJump * 2);
};

Jumper.prototype.danceBattle = function () {
  makeDancer.prototype.danceBattle.call(this);
};