module.exports = function (grunt) {

    /*
     * The `build` task gets your app ready to run for development and testing.
     */
    grunt.registerTask( 'test', [
        'copy:test_js',
        'karma-conf:compile',
        'karma:unit:start',
        'connect:e2e',
        'run:mock_server',
        'protractor-conf:e2e',
        'protractor:e2e'
    ]);

};
