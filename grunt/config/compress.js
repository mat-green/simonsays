module.exports = function (grunt) {
    grunt.config.set('compress', {
        main: {
            options: {
                mode: 'tgz',
                archive: 'build/package.tar.gz'
            },
            files: [
                {
                    src: [
                        'build/dist/**'
                    ]
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compress');
};
