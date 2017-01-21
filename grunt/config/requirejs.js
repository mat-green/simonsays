module.exports = function (grunt) {

    grunt.config.set('requirejs', {
        compile: {
            options: {
                paths: {
                  'angular': 'empty:',
                  'angular-ui-router': 'empty:',
                  'angular-ui-bootstrap': 'empty:',
                  'placeholders': 'empty:'
                },
                // dir: './<%= files.distribution %>/',
                out: './<%= files.distribution %>/<%= pkg.name %>-<%= pkg.version %>.js',
                baseUrl: '<%= files.development %>/',
                name: 'app/app.main',
                //   mainConfigFile: '<%= files.development %>/config.js',
                optimize: 'uglify2',
                uglify2: {
                    output: {
                        beautify: true
                    },
                    // 'screw-ie8': true,
                    compress: {
                      global_defs: {
                        DEBUG: false
                      }
                    },
                    warnings: false,
                    // Safe here, probably due to implicit declarations in r.js
                    mangle: true
                },
                // modules: [{
                //     name: 'templates-app',
                //     exclude: ['config']
                // }, {
                //     name: 'templates-common',
                //     exclude: ['config']
                // }, {
                //     name: 'app/about/about.module',
                //     exclude: ['config']
                // }, {
                //     name: 'app/home/home.module',
                //     exclude: ['config']
                // }, {
                //     name: 'app/app.module',
                //     exclude: ['config']
                // }, {
                //     name: 'config'
                // }],
                wrap: {
                    startFile: "grunt/templates/module.prefix",
                    endFile: "grunt/templates/module.suffix"
                },
                // Timeout explicitly disabled to ensure we do not get require.js timeout errors.
                waitSeconds: 0,
                // skipDirOptimize: true,
                removeCombined: true,
                preserveLicenseComments: true,
        //   dir: '<%= files.distribution %>/app'
            }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
};
