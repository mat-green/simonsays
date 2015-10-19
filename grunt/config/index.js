module.exports = function (grunt) {

    /**
     * The `index` task compiles the `index.html` file as a Grunt template. CSS
     * and JS files co-exist here but they get split apart later.
     */
    grunt.config.set('index', {
      /**
       * During development, we don't want to have wait for compilation,
       * concatenation, minification, etc. So to avoid these steps, we simply
       * add all script files directly to the `<head>` of `index.html`. The
       * `src` property contains the list of included files.
       */
      build: {
        dir: '<%= build_dir %>',
        src: [
          /* '<%= index_vendor_js_files() %>', */
          'build/www/vendor/angular/angular.js',
          'build/www/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
          'build/www/vendor/angular-ui-router/release/angular-ui-router.js',
          'build/www/vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
          '<%= build_dir %>/app/**/*.js',
          '<%= build_dir %>/common/**/*.js',
          '<%= build_dir %>/www/**/*.js',
          '<%= html2js.app.dest %>',
          '<%= html2js.common.dest %>',
          '<%= vendor_files.css %>',
          '<%= build_dir %>/<%= pkg.name %>-<%= pkg.version %>.css'
        ]
      },

      /**
       * When it is time to have a completely compiled application, we can
       * alter the above to include only a single JavaScript and a single CSS
       * file. Now we're back!
       */
      compile: {
        dir: '<%= compile_dir %>',
        src: [
          '<%= concat.compile_js.dest %>',
          '<%= vendor_files.css %>',
          '<%= build_dir %>/<%= pkg.name %>-<%= pkg.version %>.css'
        ]
      }
    });

};
