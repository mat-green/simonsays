angular
  .module('ngBoilerplate.about')
  .controller( 'AboutCtrl', aboutCtrl);

function aboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
}
