// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.originalSpeed = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.groupTop = 0;
  this.groupLeft = 0;
  this.groupOrderTop = 0;
  this.groupOrderLeft = 0;

  this.grouping = false;
  // this.synced = false;
  this.index = 0;

  this.step();
  this.setPosition(this.top, this.left);
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  if (!this.grouping) {
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

makeDancer.prototype.danceBattle = function () {
  let dancer = this;
  setTimeout(function () {
    dancer.grouping = true;
    dancer.timeBetweenSteps = 0;

  }, 200 * dancer.index);


  setTimeout(function () {
    dancer.grouping = false;
    dancer.lineUp(dancer.groupTop, dancer.groupLeft);
    dancer.timeBetweenSteps = 800;
    dancer.step();
  }, 2000 + (100 * dancer.index));
  // (window.danceGroups[dancer.group].length * 100)
};