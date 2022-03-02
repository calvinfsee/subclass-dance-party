//Shimmyer
var Shimmyer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer shimmyer"><img src="lib/shimmyer.jpg"></span>');
  this.timeBetweenSteps = timeBetweenSteps * 2;
  this.group = 'shimmyers';
  this.groupTop = 200;
  this.groupLeft = 1000;
  this.groupOrderTop = 150;
  this.groupOrderLeft = 0;

};

Shimmyer.prototype = Object.create(makeDancer.prototype);
Shimmyer.prototype.constructor = Shimmyer;

Shimmyer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  let timeBetweenShimmy = this.timeBetweenSteps / 4;
  //move left
  setTimeout(this.setPosition.bind(this, this.top, this.left - 50), timeBetweenShimmy);
  //move center
  setTimeout(this.setPosition.bind(this, this.top, this.left), timeBetweenShimmy * 2);
  //move right
  setTimeout(this.setPosition.bind(this, this.top, this.left + 50), timeBetweenShimmy * 3);
  //move center
  setTimeout(this.setPosition.bind(this, this.top, this.left), timeBetweenShimmy * 4);
};

// Shimmyer.prototype.danceBattle = function () {
//   makeDancer.prototype.danceBattle.call(this);
// };