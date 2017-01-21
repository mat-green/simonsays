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
  'app/home/home.module',
  'app/about/about.module'
],
function(require, angular){
  return angular
    .module('ngBoilerplate', [
      'templates-app',
      'templates-common',
      'ngBoilerplate.home',
      'ngBoilerplate.about',
      'ui.router'
    ])
    .config(require('app/app.config'))
    .controller('AppCtrl', require('app/app.controller'));
});
