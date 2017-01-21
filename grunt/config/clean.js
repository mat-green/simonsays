module.exports = function (grunt) {
    grunt.config.set('clean', {
        src: [
          '<%= files.development %>',
          '<%= files.distribution %>'
        ],
        docs: [
            '<%= files.documents %>'
        ],
        reports: [
            '<%= files.reports %>'
        ],
        packages: [
            '<%= files.base.build %>/*.tar.gz'
        ]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
