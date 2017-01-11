module.exports = function (grunt) {

    grunt.config.set('livereload', {
        options : {
            base : '<%= files.develop_dir %>'
        },
        files : [ '<%= files.develop_dir %>/**/*' ]
    });

    grunt.loadNpmTasks('grunt-livereload');
};
