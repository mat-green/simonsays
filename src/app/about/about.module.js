define([
   'require',
   'angular',
   // External libraries
   'placeholders',
   'angular-ui-bootstrap',
   // Application
   'app/about/about.config',
   'app/about/about.controller',
],
function(require, angular){
  return angular
    .module( 'ngBoilerplate.about', [
      'ui.router',
      'placeholders',
      'ui.bootstrap'
    ])
    .config(require('app/about/about.config'))
    .controller( 'AboutCtrl', require('app/about/about.controller'));
});
