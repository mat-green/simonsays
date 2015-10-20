module.exports = function (grunt) {

    /*
     * The `test-continuous` task continuously testing your application.
     */
    grunt.registerTask( 'test-continuous', [
        'karma:continuous:start',
        'protractor:continuous',
        'run:mock_server',
        'connect:livereload',
        'watch'
    ]);

};
