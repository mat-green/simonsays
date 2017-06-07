module.exports = function (grunt) {
    grunt.config.set('compress', {
        main: {
            options: {
                mode: 'tgz',
                archive: '<%= files.base.build %>/<%= pkg.name %>-<%= pkg.version %>.tar.gz'
            },
            files: [
                {
                    cwd: '<%= files.distribution %>/',
                    expand: true,
                    src: [ '**/*' ]
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compress');
};
