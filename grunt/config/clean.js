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
        ],
        conf: [
          '<%= files.base.build %>/karma-conf.js'
        ],
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
