module.exports = function (grunt) {

    function strip_src(paths) {
        var result = [];
        for(var a=0,b=paths.length; a<b; a++) {
            var path_with_src = paths[a];
            var path_without_src = "";
            grunt.log.debug("Processing path: " + path_with_src);
            if(path_with_src[0] == "!") {
                path_without_src = path_with_src.substring(5);
                path_without_src = "!" + path_without_src;
            } else {
                path_without_src = path_with_src.substring(4);
            }
            grunt.log.debug("Output path: " + path_without_src);
            result.push(path_without_src);
        }
        return result;
    }

    var files = grunt.config('files');
    var require_js_files = strip_src([ files.app.requirejs ]);
    var app_js_files = strip_src(files.app.js);
    var vendor_js_files = strip_src(files.vendor.js);
    var vendor_css_files = strip_src(files.vendor.css);
    var vendor_assets_files = strip_src(files.vendor.assets);
    var vendor_assets_fonts = strip_src(files.vendor.fonts);

    /*
     * The `copy` task just copies files from A to B. We use it here to copy
     * our project assets (images, fonts, etc.) and javascripts into
     * `build_dir`, and then to copy the assets to `compile_dir`.
     */
    grunt.config.set('copy', {
      build_app_assets: {
        files: [
          {
            src: [ '**', '!**/README.md' ],
            dest: '<%= files.develop_dir %>',
            cwd: '<%= files.src_assets_dir %>',
            expand: true
          }
        ]
      },
      build_vendor_assets: {
        files: [
          {
            src: vendor_assets_files,
            dest: '<%= files.develop_dir %>',
            cwd: '<%= files.src_dir %>',
            expand: true,
            flatten: true
          }
        ]
      },
      build_vendor_fonts: {
        files: [
          {
            src: vendor_assets_fonts,
            dest: '<%= files.develop_dir %>/fonts',
            cwd: '<%= files.src_dir %>',
            expand: true,
            flatten: true
          }
        ]
      },
      build_app_js: {
        files: [
          {
            src: app_js_files,
            dest: '<%= files.develop_dir %>',
            cwd: '<%= files.src_dir %>',
            expand: true
          }
        ]
      },
      build_requirejs_js: {
        files: [
          {
            src: files.app.configjs,
            dest: '<%= files.develop_dir %>',
            cwd: '<%= files.src_dir %>',
            expand: true
          }
        ]
      },
      build_vendor_js: {
        files: [
          {
            src: vendor_js_files,
            dest: '<%= files.develop_dir %>',
            cwd: '<%= files.src_dir %>',
            expand: true
          }
        ]
      },
      build_vendor_css: {
        files: [
          {
            src: [ vendor_css_files ],
            dest: '<%= files.develop_dir %>',
            cwd: '<%= files.src_dir %>',
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
            dest: '<%= files.compile_dir %>/',
            cwd: '<%= files.src_assets_dir %>',
            expand: true
          }
        ]
      },
      compile_requirejs_js: {
        files: [
          {
            src: [ require_js_files, files.app.configjs ],
            dest: '<%= files.compile_dir %>',
            cwd: '<%= files.src_dir %>',
            expand: true
          }
        ]
      }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

};
