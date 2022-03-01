$(document).ready(function() {
  window.dancers = [];
  window.blinkers = [];
  window.shimmyers = [];
  window.jumpers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    window[dancer.group].push(dancer);
  });
  $('.lineUpButton').on('click', function (event) {
    //iterate through the window.dancers array;
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(300, 100 + (i * 150));
    }

  });
  $('.danceBattleButton').on('click', function (event) {

  });
});


/* IDEAS
- add ESP dancer who senses when a ghost has moused over him
- add images
Dance Battle: all dancers of the same type group together in one part of the screen AND do their group dance.
 - jumpers jump in wave (jumper 1 jumps, and)
 - shimmyers shimmy in succession
 - blinkers blink back and forth in a line
 - fourth dancer


DANCE OFF: four dancers come to the middle and one is crowned the winner based on how fast they are dancing.
*/

