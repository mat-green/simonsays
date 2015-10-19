module.exports = function (grunt) {

    /*
     * This task compiles the karma template so that changes to its file array
     * don't have to be managed manually.
     */
    grunt.config.set('karmaconfig', {
      unit: {
        dir: '<%= build_dir %>/../../',
        src: [
          /* '<%= vendor_files.js %>', */
          'build/www/vendor/angular/angular.js',
          'build/www/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
          'build/www/vendor/angular-ui-router/release/angular-ui-router.js',
          'build/www/vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
          '<%= html2js.app.dest %>',
          '<%= html2js.common.dest %>',
          '<%= test_files.js %>'
        ]
      }
    });

};
