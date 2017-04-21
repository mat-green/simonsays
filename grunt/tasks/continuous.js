module.exports = function (grunt) {

    /*
     * The `test-continuous` task continuously testing your application.
     */
    grunt.registerTask( 'continuous', [
        'copy:test_js',
        'karma-conf:continuous',
        'karma:continuous:start',
        'livereload',
        'connect:continuous',
        'run:mock_server',
        'protractor-conf:e2e',
        'protractor:continuous',
        'watch'
    ]);

};
