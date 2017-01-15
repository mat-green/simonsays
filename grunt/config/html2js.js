module.exports = function (grunt) {

    /*
     * HTML2JS is a Grunt plugin that takes all of your template files and
     * places them into JavaScript files as strings that are added to
     * AngularJS's template cache. This means that the templates too become
     * part of the initial payload as one JavaScript file. Neat!
     */
    grunt.config.set('html2js', {
      options: {
        amd: true
      },
      /**
       * These are the templates from `src/app`.
       */
      app: {
        options: {
          base: '<%= files.src_dir %>/app'
        },
        src: [ '<%= files.app.atpl %>' ],
        dest: '<%= files.develop_dir %>/templates-app.js'
      },

      /**
       * These are the templates from `src/common`.
       */
      common: {
        options: {
          base: '<%= files.src_dir %>/common'
        },
        src: [ '<%= files.app.ctpl %>' ],
        dest: '<%= files.develop_dir %>/templates-common.js'
      }
    });

    grunt.loadNpmTasks('grunt-html2js');
};
