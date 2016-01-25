module.exports = function (grunt) {

    /*
     * This task compiles the karma template so that changes to its file array
     * don't have to be managed manually.
     */
    grunt.config.set('karma-conf', {
      continuous: {
        dir: '<%= files.build_dir %>',
        src: [
          '<%= files.vendor.js %>',
          '<%= html2js.app.dest %>',
          '<%= html2js.common.dest %>',
          '<%= files.test.js %>',
          '<%= files.app.modules %>',
          '<%= files.app.js %>',
          '<%= files.app.jsunit %>'
        ]
      },
      compile: {
        dir: '<%= files.build_dir %>',
        src: [
          '<%= concat.compile_js.dest %>',
          '<%= files.test.js %>',
          '<%= files.app.jsunit %>'
        ]
      }
    });

};
