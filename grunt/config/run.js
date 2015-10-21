module.exports = function(grunt) {

    grunt.config.set('run', {
        mock_server : {
            options : {
                wait : false
            },
            args : []
            // args: ['<%= files.src_dir %>/mock/apiserver.js']
        }
    });

    grunt.loadNpmTasks('grunt-run');
};
