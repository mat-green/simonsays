module.exports = function (grunt) {

    /*
     * The `test-continuous` task continuously testing your application.
     */
    grunt.registerTask( 'test-continuous', [
        'karma-conf:continuous',
        'karma:continuous:start',
        'livereload',
        'connect:continuous',
        'run:mock_server',
        'protractor:continuous',
        'watch'
    ]);

};
