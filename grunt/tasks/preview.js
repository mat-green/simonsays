module.exports = function (grunt) {

  /*
   * The `compile` task gets your app ready for deployment by concatenating and
   * minifying your code.
   */
  grunt.registerTask( 'preview', [
    'clean',
    'build',
    'compile',
    'connect:preview',
    'run:mock_server',
    'watch'
  ]);

};
