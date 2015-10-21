module.exports = function (grunt) {

    /*
     * The `build` task gets your app ready to run for development and testing.
     */
    grunt.registerTask( 'test', [
        'karma-conf:compile',
        'karma:unit:start',
        'connect:test',
        'run:mock_server',
        'protractor:e2e'
    ]);

};
