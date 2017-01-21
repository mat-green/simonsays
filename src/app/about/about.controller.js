define([], function(){
  var AboutCtrl = function( $scope ) {
    // This is simple a demo for UI Boostrap.
    $scope.dropdownDemoItems = [
      "The first choice!",
      "And another choice for you.",
      "but wait! A third!"
    ];
  };
  return ['$scope', AboutCtrl];
});
