module.exports = function (grunt) {

  /*
   * The `compile` task gets your app ready for deployment by concatenating and
   * minifying your code.
   */
  grunt.registerTask( 'distribute', [
    'clean',
    'build',
    'compile',
    'test',
    'compress'
  ]);

};
