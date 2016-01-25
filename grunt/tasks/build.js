module.exports = function (grunt) {

    /*
     * The `build` task gets your app ready to run for development and testing.
     */
    grunt.registerTask( 'build', [
        'jshint',
        'coffeelint',
        'coffee',
        'html2js',
        'ngAnnotate',
        'less:build',
        'concat:build_css',
        'copy:build_app_assets',
        'copy:build_vendor_assets',
        'copy:build_vendor_js',
        'copy:build_vendor_css',
        'copy:build_vendor_fonts',
        'index:build'
    ]);

};
