module.exports = function (grunt) {
    grunt.config.set('rename', {
        build: {
          files: [
            {
                src: '<%= files.development %>/<%= files.app.config.build %>',
                dest: '<%= files.development %>/config.js'
            }
          ]
      },
      compile: {
        files: [
          {
              src: '<%= files.distribution %>/<%= files.app.config.distribution %>',
              dest: '<%= files.distribution %>/config.js'
          }
        ]
      }
    });

    grunt.loadNpmTasks('grunt-contrib-rename');
};
