$(document).ready(function() {
  window.dancers = [];
  window.danceGroups = {
    blinkers: [],
    shimmyers: [],
    jumpers: [],
    espers: []
  };

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
    dancer.index = window.danceGroups[dancer.group].length;
    dancer.groupTop = dancer.groupTop + (dancer.index * dancer.groupOrderTop);
    dancer.groupLeft = dancer.groupLeft + (dancer.index * dancer.groupOrderLeft);
    window.danceGroups[dancer.group].push(dancer);
  });
  $('.lineUpButton').on('click', function (event) {
    //iterate through the window.dancers array;
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(300, 100 + (i * 150));
    }
  });
  $('.danceBattleButton').on('click', function (event) {
    for (let key in window.danceGroups) {
      let group = window.danceGroups[key];
      for (let i = 0; i < group.length; i++) {
        group[i].danceBattle();
      }
    }
  });
  //desired pufferfish behavior if we had more time.
  //add an event listener for hovering over a pufferfish
  //on mousover:
  //grab the source element using jQuery
  //replace the smallpuff.jpg text in the element with bigpuff.jpg text
  //on mouseoff, do the opposite


});


/* Tasks
- background image
- implement puffer fish
DANCE OFF: four dancers come to the middle and one is crowned the winner based on how fast they are dancing.
*/