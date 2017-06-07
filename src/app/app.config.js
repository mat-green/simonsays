define([], function(){
  var AppConfig = function($urlRouterProvider, $locationProvider, $logProvider) {
    $urlRouterProvider.otherwise('/play');
    // use the HTML5 History API
    $locationProvider.html5Mode(true);

    // manage console log output
    $logProvider.debugEnabled(true);
  };
  return ['$urlRouterProvider', '$locationProvider', '$logProvider', AppConfig];
});
