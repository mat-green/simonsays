define([
  'require',
  'angular',
  // Application
  'common/plusOne/plusOne.directive'
],
function(require, angular){
  return angular
    .module( 'plusOne', [] )
    .directive( 'plusOne', require('common/plusOne/plusOne.directive'));
});
