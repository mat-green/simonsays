module.exports = function (grunt) {

    /*
     * The `build` task gets your app ready to run for development and testing.
     */
    grunt.registerTask( 'dev', [
        'clean:src',
        'clean:docs',
        'clean:reports',
        'build',
        'karma:continuous:start',
        'run:mock_server',
        'connect:livereload',
        'watch:karma'
    ]);

};
