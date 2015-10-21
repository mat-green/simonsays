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
        dir: '<%= files.develop_dir %>',
        src: [
            '<%= files.vendor.js %>',
            '<%= files.develop_dir %>/app/**/*.js',
            '<%= files.develop_dir %>/common/**/*.js',
            '<%= files.develop_dir %>/**/*.js',
            '<%= html2js.app.dest %>',
            '<%= html2js.common.dest %>',
            '<%= files.vendor.css %>',
            '<%= files.develop_dir %>/<%= pkg.name %>-<%= pkg.version %>.css'
        ]
      },

      /**
       * When it is time to have a completely compiled application, we can
       * alter the above to include only a single JavaScript and a single CSS
       * file. Now we're back!
       */
      compile: {
        dir: '<%= files.compile_dir %>',
        src: [
          '<%= concat.compile_js.dest %>',
          '<%= files.vendor.css %>',
          '<%= files.compile_dir %>/<%= pkg.name %>-<%= pkg.version %>.css'
        ]
      }
    });

};
