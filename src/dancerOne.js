//Shimmyer
var Shimmyer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps * 2;
  this.group = 'shimmyers';
};

Shimmyer.prototype = Object.create(makeDancer.prototype);
Shimmyer.prototype.constructor = Shimmyer;

Shimmyer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  let timeBetweenShimmy = this.timeBetweenSteps / 4;
  //move left
  setTimeout(this.setPosition.bind(this, this.top, this.left - 25), timeBetweenShimmy);
  //move center
  setTimeout(this.setPosition.bind(this, this.top, this.left), timeBetweenShimmy * 2);
  //move right
  setTimeout(this.setPosition.bind(this, this.top, this.left + 25), timeBetweenShimmy * 3);
  //move center
  setTimeout(this.setPosition.bind(this, this.top, this.left), timeBetweenShimmy * 4);
};

Shimmyer.prototype.danceBattle = function (index, time) {
  makeDancer.prototype.danceBattle.call(this);
};