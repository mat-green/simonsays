define([], function(){
/**
 * And of course we define a controller for our route.
 */
  var PlayCtrl = function( $scope, $log, $timeout, Play ) {
    // attributes
    var $cubes = {
      data: null,
      index: 0,
      response: [],
      sequence: function() {
        var buttons = document.querySelectorAll('span.small');
        if($cubes.index < $cubes.data.length)
        {
          var classes = buttons[$cubes.data[$cubes.index]-1].className.split(" ");
          if($cubes.index > 0)
          {
            angular.element(buttons[$cubes.data[$cubes.index-1]-1]).removeClass("glow");
          }
          angular.element(buttons[$cubes.data[$cubes.index]-1]).addClass("glow");
          $scope.colour = classes[2];
          $cubes.index += 1;
          $timeout($cubes.sequence, 1000);
        }
        else
        {
          angular.element(buttons[$cubes.data[$cubes.index-1]-1]).removeClass("glow");
          $scope.colour = "";
        }
      },
      win: function() {
        var buttons = document.querySelectorAll('span.large');
        angular.element(buttons[0]).text('Yeah - thats correct!');
        $timeout(flash, 500, true, 5, buttons[0]);
      },
      lose: function() {
        var buttons = document.querySelectorAll('span.large');
        angular.element(buttons[0]).text('Oops - thats incorrect - try again');
        $timeout(flash, 500, true, 5, buttons[0]);
      }
    };

    function resultCheck(item, index) {
      return item == $cubes.data[index];
    }

    function flash(check, item) {
      glowOn(item);
      if(check > 0) {
        $timeout($cubes.flash, 500, true, check-1);
      }
    }

    function glowOn(item) {
      angular.element(item).addClass("glow");
      $timeout(glowOff, 250, true, item);
    }

    function glowOff(item) {
      angular.element(item).removeClass("glow");
    }

    // Bindings
    $scope.colour = "";
    $scope.playing = false;

    $scope.selected = function(event) {
      var classes = event.target.className.split(" ");
      var buttons = document.querySelectorAll('span.small');
      $scope.colour = classes[2];
      for(var i = 0; i < 4; i++) {
        classes = buttons[i].className.split(" ");
        if($scope.colour == classes[2]) {
          $cubes.response.push(i+1);
          if($cubes.data !== null && $cubes.response.length == $cubes.data.length) {
            $scope.colour = "";
            if($cubes.response.every(resultCheck)) { // spiral win
              $log.info("you win");
              $cubes.win();
            } else { // flash
              $log.info("you lose");
              $cubes.lose();
            }
          }
          break;
        }
      }
    };

    $scope.play = function() {
      if( $cubes.data === null) {
        Play.get(
          function(data, headers) {
            $cubes.index = 0;
            $scope.playing = true;
            $cubes.data = data.sequences;
            $timeout($cubes.sequence, 1000);
          },
          function(response) {
            $log.error("Failed to get " + identifier + " project for " + context.workspace + " workspace because: " + angular.toJson(response, true));
          }
        );
      } else {
        $cubes.index = 0;
        $scope.playing = true;
        $timeout($cubes.sequence, 1000);
      }
    };

    $scope.reset = function() {
      var buttons = document.querySelectorAll('span.large');
      angular.element(buttons[0]).text('');
      $scope.colour = "";
      $cubes.response = [];
      $scope.playing = false;
    };
  };
  return ['$scope', '$log', '$timeout', 'Play', PlayCtrl];
});
