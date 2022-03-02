var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer blinker"><img src="lib/chameleon.jpg"></span>');
  this.group = 'blinkers';
  this.timeBetweenSteps = timeBetweenSteps * 2;
  this.groupTop = 200;
  this.groupLeft = 400;
  this.groupOrderTop = 0;
  this.groupOrderLeft = 150;
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  this.setPosition(this.top, this.left);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

// makeBlinkyDancer.prototype.danceBattle = function () {
//   makeDancer.prototype.danceBattle.call(this);
// };