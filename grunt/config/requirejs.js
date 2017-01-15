module.exports = function (grunt) {

    grunt.config.set('requirejs', {
      compile: {
        options: {
          appDir: '<%= files.develop_dir %>',
          mainConfigFile: '<%= files.develop_dir %>/config.js',
          optimize: 'uglify2',
          uglify2: {
            'screw-ie8': true,
            compress: {
              global_defs: {
                DEBUG: false
              }
            },
            warnings: false,
            // Safe here, probably due to implicit declarations in r.js
            mangle: true
          },
          paths: {
              'angular': 'empty:',
              'angular-ui-router': 'empty:',
              'angular-ui-bootstrap': 'empty:'
          },
          modules: [
              {
                  name: 'app/app.main',
                  exclude: ['config']
              }, {
                  name: 'config'
              }
          ],
          // Timeout explicitly disabled to ensure we do not get require.js timeout errors.
          waitSeconds: 0,
          skipDirOptimize: true,
          removeCombined: true,
          preserveLicenseComments: true,
        //   dir: '<%= files.compile_dir %>'
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
};
