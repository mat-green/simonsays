module.exports = function(grunt) {

    /* basic web server for testing and serving single page content */
    grunt.config.set('connect', {
        options : {
            port : 9000,
            hostname : 'localhost'
        },
        continuous : {
            options : {
                livereload : 35730,
                open : true,
                base : ['<%= files.develop_dir %>']

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
