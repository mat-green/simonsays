module.exports = function(grunt) {

    grunt.config.set('run', {
        mock_server : { // provide mock server for tests.
            options : {
                wait : false
            },
            args : []
            // args: ['<%= files.base.src %>/mock/apiserver.js']
        }
    });

    grunt.loadNpmTasks('grunt-run');
};
