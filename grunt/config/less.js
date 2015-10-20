module.exports = function (grunt) {

    /*
     * `grunt-contrib-less` handles our LESS compilation and uglification automatically.
     * Only our `main.less` file is included in compilation; all other files
     * must be imported from this file.
     */
    grunt.config.set('less', {
      build: {
        files: {
          'build/www/<%= pkg.name %>-<%= pkg.version %>.css': '<%= app_files.less %>'
        }
      },
      compile: {
        files: {
          'build/dist/<%= pkg.name %>-<%= pkg.version %>.css': '<%= app_files.less %>'
        },
        options: {
          cleancss: true,
          compress: true
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
};
