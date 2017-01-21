module.exports = function (grunt) {

    /*
     * This task compiles the karma template so that changes to its file array
     * don't have to be managed manually.
     */
    var files = grunt.config('files');

    grunt.config.set('karma-conf', {
      continuous: {
        dir: '<%= files.development %>',
        reports: '<%= files.reports %>',
        src: [
        //   files.vendor.js.map(function(value) { return value.lib; }),
        //   files.vendor.require,
        //   '<%= html2js.app.dest %>',
        //   '<%= html2js.common.dest %>',
        //   '<%= files.test.js %>',
        //   '<%= files.app.js %>',
        //   '<%= files.app.jsunit %>'
        ]
      },
      compile: {
        dir: '<%= files.development %>',
        reports: '<%= files.reports %>',
        src: [
        //   '<%= concat.compile_js.dest %>',
        //   '<%= files.test.js %>',
        //   '<%= files.app.jsunit %>'
        ]
      }
    });

};
