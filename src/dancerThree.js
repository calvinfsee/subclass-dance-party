//ESP Sensing dancer
var Esper = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer esper"><img src="lib/smallpuff.jpg" class="dancer esper"></span>');
  this.timeBetweenSteps = timeBetweenSteps * 2;
  this.group = 'espers';
  this.groupTop = 700;
  this.groupLeft = 400;
  this.groupOrderTop = 0;
  this.groupOrderLeft = 150;
};

Esper.prototype = Object.create(makeDancer.prototype);
Esper.prototype.constructor = Esper;

Esper.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.setPosition(this.top, this.left);
};
