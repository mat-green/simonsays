module.exports = function(grunt) {

    /*
     * The Karma configurations.
     */
    grunt.config.set('karma', {
        options : {
            configFile : 'grunt/test/karma-conf.js'
        },
        unit : {
            singleRun : true
        },
        continuous : {
            background : true
        }
    });

    grunt.loadNpmTasks('grunt-karma');
};
