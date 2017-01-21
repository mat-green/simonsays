module.exports = function (grunt) {

    function strip_src(paths) {
        if(paths.map) {
            return paths.map(function(value) {
                return value.replace("src/","");
            });
        } else {
            return paths.replace("src/","");
        }
    }

    var files = grunt.config('files');

    /*
     * The `copy` task just copies files from A to B. We use it here to copy
     * our project assets (images, fonts, etc.) and javascripts into
     * `build_dir`, and then to copy the assets to `distribution`.
     */
    grunt.config.set('copy', {
      build_app_assets: {
        files: [
          {
            src: [ '**', '!**/README.md' ],
            dest: '<%= files.development %>',
            cwd: '<%= files.app.assets %>',
            expand: true,
            flatten: true
          }
        ]
      },
      build_app_config: {
        files: [
            {
                src: '<%= files.app.config.build %>',
                dest: '<%= files.development %>',
                cwd: '<%= files.base.src %>',
                expand: true
            }
        ]
      },
      build_app_js: {
          files: [
              {
                  src: strip_src(files.app.js),
                  dest: '<%= files.development %>',
                  cwd: '<%= files.base.src %>',
                  expand: true
              }
          ]
      },
      build_vendor_assets: {
        files: [
          {
            src: strip_src(files.vendor.assets),
            dest: '<%= files.development %>',
            cwd: '<%= files.base.src %>',
            expand: true,
            flatten: true
          }
        ]
      },
      build_vendor_fonts: {
        files: [
          {
            src: strip_src(files.vendor.fonts),
            dest: '<%= files.development %>/fonts',
            cwd: '<%= files.base.src %>',
            expand: true,
            flatten: true
          }
        ]
      },
      build_vendor_js: {
        files: [
          {
            src: [ strip_src(files.vendor.js.map(function(value) { return value.lib; })), strip_src(files.vendor.require)],
            dest: '<%= files.development %>',
            cwd: '<%= files.base.src %>',
            expand: true
          }
        ]
      },
      build_vendor_css: {
        files: [
          {
            src: strip_src(files.vendor.css),
            dest: '<%= files.development %>',
            cwd: '<%= files.base.src %>',
            expand: true
          }
        ]
      },
      compile_assets: {
        files: [
          {
            src: [
                '**',
                '!**/README.md'
            ],
            dest: '<%= files.distribution %>/',
            cwd: '<%= files.app.assets %>',
            expand: true
          }
        ]
      },
      compile_requirejs_js: {
        files: [
          {
            src: '<%= files.app.config.distribution %>',
            dest: '<%= files.distribution %>/config.js',
            cwd: '<%= files.base.src %>',
            expand: true
          }
        ]
      }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

};
