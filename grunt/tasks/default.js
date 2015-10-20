module.exports = function (grunt) {

    /*
     * The default task is to package the web application for deployment
     */
    grunt.registerTask( 'package', 'Build an application archive for deployment.', [
        'clean:src',
        'clean:docs',
        'clean:reports',
        'distribute'
    ]);

};
