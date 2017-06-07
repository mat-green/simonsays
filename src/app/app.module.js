define([
  'require',
  'angular',
  // External libraries
  'angular-ui-router',
  // Application
  'templates-app',
  'templates-common',
  'app/app.config',
  'app/app.controller',
  'app/play/play.module'
],
function(require, angular){
  return angular
    .module('simonsays', [
      'templates-app',
      'templates-common',
      'simonsays.play',
      'ui.router'
    ])
    .config(require('app/app.config'))
    .controller('AppCtrl', require('app/app.controller'));
});
