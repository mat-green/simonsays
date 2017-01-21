module.exports = function(grunt) {

    /*
     * The Karma configurations.
     */
    grunt.config.set('karma', {
        options : {
            configFile : '<%= files.base.build %>/karma-conf.js'
        },
        unit : {
            options : {
                singleRun : true
            }
        },
        continuous : {
            options : {
                background : true
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
};
