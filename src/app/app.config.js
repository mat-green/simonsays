angular
  .module('ngBoilerplate')
  .config(myAppConfig);

function myAppConfig($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/home');
  // use the HTML5 History API
  $locationProvider.html5Mode(true);
}
