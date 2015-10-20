module.exports = function (grunt) {

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
            dest: 'build/www/',
            cwd: 'src/assets',
            expand: true
          }
       ]
      },
      build_vendor_assets: {
        files: [
          {
            src: [ '<%= vendor_files.assets %>' ],
            dest: 'build/www/',
            cwd: 'src',
            expand: true,
            flatten: true
          }
       ]
      },
      build_appjs: {
        files: [
          {
            src: [ '<%= app_files.js %>' ],
            dest: 'build/www/',
            cwd: 'src',
            expand: true
          }
        ]
      },
      build_vendor_js: {
        files: [
          {
            src: [ '<%= vendor_files.js %>' ],
            dest: 'build/www/',
            cwd: 'src',
            expand: true
          }
        ]
      },
      compile_assets: {
        files: [
          {
            src: [ '**', '!**/README.md' ],
            dest: 'build/dist/',
            cwd: 'src/assets',
            expand: true
          }
        ]
      }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

};
