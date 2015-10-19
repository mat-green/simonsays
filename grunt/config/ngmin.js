module.exports = function (grunt) {

    /*
     * `ng-min` annotates the sources before minifying. That is, it allows us
     * to code without the array syntax.
     */
    grunt.config.set('ngmin', {
      compile: {
        files: [
          {
            src: [ '<%= app_files.js %>' ],
            cwd: '<%= build_dir %>',
            dest: '<%= build_dir %>',
            expand: true
          }
        ]
      }
    });

    grunt.loadNpmTasks('grunt-ngmin');
};
