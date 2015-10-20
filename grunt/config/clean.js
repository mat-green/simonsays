module.exports = function (grunt) {
    grunt.config.set('clean', {
        src: [
          '<%= build_dir %>',
          '<%= compile_dir %>'
        ],
        docs: [
            'build/api'
        ],
        reports: [
            'build/test/coverage/'
        ]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
