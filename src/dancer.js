// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.originalSpeed = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.grouped = false;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.step(timeBetweenSteps);
  this.setPosition(this.top, this.left);
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  if (!this.grouped) {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }


};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function (newTop, newLeft) {
  this.setPosition(newTop, newLeft);
  this.top = newTop;
  this.left = newLeft;
};

makeDancer.prototype.danceBattle = function (index) {
  this.grouped = true;
  this.timeBetweenSteps = 2000;

  //index gives the position of a dancer in its group (subclass array).
  //time gives the time elapsed between members of the same group
  //default group positions, and a default factor in which to multiply by the index to order the dancers
  //use lineup to set new position
  //setTimeout(step, i x 1000);
};