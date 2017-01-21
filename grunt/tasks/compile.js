module.exports = function (grunt) {

  /*
   * The `compile` task gets your app ready for deployment by concatenating and
   * minifying your code.
   */
  grunt.registerTask( 'compile', [
    'less:compile',
    'copy:compile_assets',
    'copy:compile_app_config',
    'copy:compile_vendor_assets',
    'copy:compile_vendor_js',
    'copy:compile_vendor_css',
    'copy:compile_vendor_fonts',
    'rename:compile',
    'requirejs:compile',
    'index:compile'
  ]);

};
