module.exports = function (grunt) {
    grunt.config.set('clean', {
        src: [
          '<%= files.develop_dir %>',
          '<%= files.compile_dir %>'
        ],
        docs: [
            '<%= files.docs_dir %>'
        ],
        reports: [
            '<%= files.reports_dir %>'
        ],
        packages: [
            '<%= files.build_dir %>/*.tar.gz'
        ]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
