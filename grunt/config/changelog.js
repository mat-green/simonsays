module.exports = function (grunt) {

    /*
     * Creates a changelog on a new version.
     */
    grunt.config.set('changelog', {
      options: {
        dest: 'CHANGELOG.md',
        template: 'src/grunt/changelog.tpl'
      }
    });

    grunt.loadNpmTasks('grunt-conventional-changelog');
};
