module.exports = function(grunt) {

    /* grunt-open will open your browser at the project's URL */
    grunt.config.set('run', {
        mock_server : {
            options : {
                wait : false
            },
            args : []
            // args: ['app/mockApi/apiserver.js']
        }
    });

    grunt.loadNpmTasks('grunt-run');
};
