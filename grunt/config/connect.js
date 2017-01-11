module.exports = function(grunt) {

    /* basic web server for testing and serving single page content */
    grunt.config.set('connect', {
        options : {
            port : 8008,
            hostname : 'localhost',
        },
        continuous : {
            options : {
                // livereload : 35729, // Default port for livereload
                open : true,
                base : ['<%= files.develop_dir %>'],
                // Livereload needs connect to insert a Javascript snippet in the
                // pages it serves. This requires using a custom connect middleware.
                middleware : function(connect, options) {
                    return [
                        require('connect-livereload')(),
                        // Serve the project folder
                        connect.static(options.base[0])
                    ];
                }
            }
        },
        compile : {
            options : {
                base : ['<%= files.compile_dir %>']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
