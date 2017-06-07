module.exports = function(grunt) {
    // Get a static content server
    var serveStatic = require('serve-static');
    /* basic web server for testing and serving single page content */
    grunt.config.set('connect', {
        options : {
            port : 8008,
            hostname : 'localhost'
        },
        continuous : {
            options : {
                // livereload : 35729, // Default port for livereload
                open : true,
                base : ['<%= files.development %>'],
                // Livereload needs connect to insert a Javascript snippet in the
                // pages it serves. This requires using a custom connect middleware.
                middleware : function(connect, options) {
                    return [
                        require('connect-livereload')(),
                        // Serve the project folder
                        serveStatic(options.base[0])
                    ];
                }
            }
        },
        viewing : {
            options : {
                open : true,
                base : [ '<%= files.distribution %>' ],
                keepalive: true
            }
        },
        e2e : {
            options : {
                base : ['<%= files.distribution %>']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
