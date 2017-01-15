module.exports = function (grunt) {

  /*
   * The `stage` task allows you to app how the deployment version will run
   * once your code is concatenating and minified.
   */
  grunt.registerTask( 'stage', [
    'clean',
    'build',
    'compile',
    'connect:preview'
  ]);

};
