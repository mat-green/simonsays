define([], function(){
  var AppConfig = function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  };
  return ['$urlRouterProvider', '$locationProvider', AppConfig];
});
