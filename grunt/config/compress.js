module.exports = function (grunt) {
    grunt.config.set('compress', {
        main: {
            options: {
                mode: 'tgz',
                archive: '<%= files.build_dir %>/<%= pkg.name %>-<%= pkg.version %>.tar.gz'
            },
            files: [
                {
                    cwd: '<%= files.compile_dir %>/',
                    expand: true,
                    src: [ '**/*' ]
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compress');
};
