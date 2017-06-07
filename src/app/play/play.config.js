define([], function(){
/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
  var PlayConfig = function( $stateProvider ) {
    $stateProvider.state( 'play', {
      url: '/play',
      views: {
        "main": {
          controller: 'PlayCtrl',
          templateUrl: 'play/play.tpl.html'
        }
      },
      data:{ pageTitle: 'Play' }
    });
  };
  return ['$stateProvider', PlayConfig];
});
