module.exports = function(grunt) {

    grunt.config.set('run', {
        continuous : { // provide mock server for tests.
            options : {
                wait : false
            },
            args : []
            // args: ['<%= files.src_dir %>/mock/apiserver.js']
        }
    });

    grunt.loadNpmTasks('grunt-run');
};
