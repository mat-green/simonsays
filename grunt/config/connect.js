module.exports = function(grunt) {

    /* basic web server for testing and serving single page content */
    grunt.config.set('connect', {
        options : {
            port : 9000,
            hostname : 'localhost'
        },
        livereload : {
            options : {
                livereload : 35729,
                open : true,
                base : ['<%= files.develop_dir %>']

            }
        },
        test : {
            options : {
                base : ['<%= files.develop_dir %>']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
