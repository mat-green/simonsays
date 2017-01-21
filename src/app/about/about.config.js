define([], function(){
  var AboutConfig = function( $stateProvider ) {
    $stateProvider.state( 'about', {
      url: '/about',
      views: {
        "main": {
          controller: 'AboutCtrl',
          templateUrl: 'about/about.tpl.html'
        }
      },
      data:{ pageTitle: 'What is It?' }
    });
  };
  return ['$stateProvider', AboutConfig];
});
