module.exports = function (grunt) {
    grunt.config.set('compress', {
        main: {
            options: {
                mode: 'tgz',
                archive: '<%= files.build_dir %>/<%= pkg.name %>-<%= pkg.version %>.tar.gz'
            },
            files: [
                {
                    src: [
                        '<%= files.compile_dir %>/**'
                    ]
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compress');
};
