module.exports = function (grunt) {

    /*
     * The default task is to build and compile.
     */
    grunt.registerTask( 'default', 'Build an application archive for deployment.', [
        'build',
        'compile'
    ]);

};
