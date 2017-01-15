module.exports = function (grunt) {

    /*
     * The `test-continuous` task continuously testing your application.
     */
    grunt.registerTask( 'continuous', [
        'karma-conf:continuous',
        'karma:continuous:start',
        'livereload',
        'connect:continuous',
        'run:continuous',
        'protractor:continuous',
        'watch'
    ]);

};
