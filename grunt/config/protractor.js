module.exports = function (grunt) {

    /*
     * Configuration for end to end testing.
     */
    grunt.config.set('protractor', {
        options : {
            configFile : "<%= files.base.build %>/protractor-conf.js", // Default config file
            noColor : false, // If true, protractor will not use colors in its output.
            // debug: true,
            args : {

            }
        },
        e2e : {
            options : {
                keepAlive: false //false // grunt process will stop when the test fails.
            }
        },
        continuous : {
            options : {
                keepAlive :true
            }
        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
};
