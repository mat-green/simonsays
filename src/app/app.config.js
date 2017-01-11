angular
  .module('ngBoilerplate')
  .config(myAppConfig);

function myAppConfig( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
}
