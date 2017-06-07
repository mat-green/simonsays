module.exports = function (grunt) {

    grunt.config.set('livereload', {
        options : {
            base : '<%= files.development %>'
        },
        files : [ '<%= files.development %>/**/*' ]
    });

    grunt.loadNpmTasks('grunt-livereload');
};
