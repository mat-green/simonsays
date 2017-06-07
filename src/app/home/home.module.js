/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
define([
   'require',
   'angular',
   // Application
   'app/home/home.config',
   'app/home/home.controller',
   'common/plusOne/plusOne.module'
],
function(require, angular){
  return angular
    .module( 'ngBoilerplate.home', [
      'ui.router',
      'plusOne'
    ])
    .config(require('app/home/home.config'))
    .controller( 'HomeCtrl', require('app/home/home.controller'));
});
