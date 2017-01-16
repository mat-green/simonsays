module.exports = function (grunt) {

    /*
     * This task compiles the karma template so that changes to its file array
     * don't have to be managed manually.
     */
    grunt.config.set('protractor-conf', {
        e2e: {
            dir: '<%= files.build_dir %>',
            port: '<%= connect.options.port %>'
        }
    });

};
