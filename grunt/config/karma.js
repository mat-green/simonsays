module.exports = function (grunt) {

    /*
     * The Karma configurations.
     */
    grunt.config.set('karma', {
      options: {
        configFile: '<%= build_dir %>/../karma-unit.js'
      },
      unit: {
        port: 9019,
        background: true
      },
      continuous: {
        singleRun: true
      }
    });

    grunt.loadNpmTasks('grunt-karma');
};
