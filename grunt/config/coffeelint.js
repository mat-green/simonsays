module.exports = function (grunt) {

    /*
     * `coffeelint` does the same as `jshint`, but for CoffeeScript.
     * CoffeeScript is not the default in ngBoilerplate, so we're just using
     * the defaults here.
     */
    grunt.config.set('coffeelint', {
      src: {
        files: {
          src: [ '<%= files.app.coffee %>' ]
        }
      },
      test: {
        files: {
          src: [ '<%= files.app.coffeeunit %>' ]
        }
      }
    });

    grunt.loadNpmTasks('grunt-coffeelint');
};
