module.exports = function (grunt) {
    grunt.config.set('compress', {
        main: {
            options: {
                mode: 'tgz',
                archive: 'dist/package.tar.gz'
            },
            files: [
                {
                    src: [
                        'config/**',
                        'api/**',
                        'bin/**',
                        'bootstrap/**',
                        'node_modules/**',
                        'Gruntfile.js',
                        'package.json',
                        'server.js'
                    ]
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compress');
};
