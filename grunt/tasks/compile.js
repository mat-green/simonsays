module.exports = function (grunt) {

  /*
   * The `compile` task gets your app ready for deployment by concatenating and
   * minifying your code.
   */
  grunt.registerTask( 'compile', [
    'less:compile',
    'copy:compile_assets',
    'copy:compile_requirejs_js',
    'requirejs:compile',
    'index:compile'
  ]);

};
