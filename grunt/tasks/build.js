module.exports = function (grunt) {

    /*
     * The `build` task gets your app ready to run for development and testing.
     */
    grunt.registerTask( 'build', [
        'clean',
        'html2js',
        'jshint',
        'coffeelint',
        'coffee',
        'less:build',
        'concat:build_css',
        'copy:build_app_assets',
        'copy:build_vendor_assets',
        'copy:build_appjs',
        'copy:build_vendorjs',
        'index:build',
        'karmaconfig',
        'karma:continuous'
    ]);

};
