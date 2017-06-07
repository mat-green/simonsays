module.exports = function (grunt) {

    /*
     * `grunt coffee` compiles the CoffeeScript sources. To work well with the
     * rest of the build, we have a separate compilation task for sources and
     * specs so they can go to different places. For example, we need the
     * sources to live with the rest of the copied JavaScript so we can include
     * it in the final build, but we don't want to include our specs there.
     */
    grunt.config.set('coffee', {
      source: {
        options: {
          bare: true
        },
        expand: true,
        cwd: 'src',
        src: [ '<%= files.app.coffee %>' ],
        dest: '<%= files.develop_dir %>',
        ext: '.js'
      }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
};
