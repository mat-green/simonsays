define([ 'angular' ], function(angular){
  var AppCtrl = function( $scope, $location ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      if ( angular.isDefined( toState.data.pageTitle ) ) {
        $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
      }
    });
  };
  return ['$scope', '$location', AppCtrl];
});
