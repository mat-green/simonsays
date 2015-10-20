module.exports = function (grunt) {

  /*
   * The `compile` task gets your app ready for deployment by concatenating and
   * minifying your code.
   */
  grunt.registerTask( 'compile', [
    'less:compile',
    'copy:compile_assets',
    'ngmin',
    'concat:compile_js',
    'uglify',
    'index:compile',
    'compress'
  ]);

};
