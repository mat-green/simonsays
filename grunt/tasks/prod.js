module.exports = function (grunt) {

  /*
   * The `compile` task gets your app ready for deployment by concatenating and
   * minifying your code.
   */
  grunt.registerTask( 'prod', [
    'clean',
    'build',
    'optimise',
    'test',
    'compress' // publish as a zip file.
  ]);

};
