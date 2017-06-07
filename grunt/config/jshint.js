module.exports = function (grunt) {

    /*
     * `jshint` defines the rules of our linter as well as which files we
     * should check. This file, all javascript sources, and all our unit tests
     * are linted based on the policies listed in `options`. But we can also
     * specify exclusionary patterns by prefixing them with an exclamation
     * point (!); this is useful when code comes from a third party but is
     * nonetheless inside `src/`.
     */
    grunt.config.set('jshint', {
      src: [
        '<%= files.app.js %>'
      ],
      test: [
        '<%= files.app.jsunit %>'
      ],
      gruntfile: [
        'Gruntfile.js',
        'grunt/**/*.js'
      ],
      options: {
        curly: true,
        immed: true,
        newcap: true,
        noarg: true,
        sub: true,
        boss: true,
        eqnull: true
      },
      globals: {}
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};
