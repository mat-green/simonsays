module.exports = function (grunt) {

    /*
     * In order to make it safe to just compile or copy *only* what was changed,
     * we need to ensure we are starting from a clean, fresh build. So we rename
     * the `watch` task to `delta` (that's why the configuration is called `delta`)
     * and then add a new task called `watch` that does a clean build before
     * watching for changes.
     */
    // grunt.renameTask( 'watch', 'delta' );
    // grunt.registerTask( 'watch', [ 'build', 'karma:unit', 'delta' ] );

};
