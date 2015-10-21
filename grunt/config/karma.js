module.exports = function(grunt) {

    /*
     * The Karma configurations.
     */
    grunt.config.set('karma', {
        options : {
            configFile : '<%= files.build_dir %>/karma-conf.js'
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
