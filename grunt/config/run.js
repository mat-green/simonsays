module.exports = function(grunt) {

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
