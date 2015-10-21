module.exports = function(grunt) {

    /*
     * `grunt concat` concatenates multiple source files into a single file.
     */
    grunt.config.set('concat', {
        /**
         * The `build_css` target concatenates compiled CSS and vendor CSS
         * together.
         */
        build_css : {
            src : ['<%= files.vendor.css %>', '<%= files.compile_dir %>/<%= pkg.name %>-<%= pkg.version %>.css'],
            dest : '<%= files.compile_dir %>/<%= pkg.name %>-<%= pkg.version %>.css'
        },
        /**
         * The `compile_js` target is the concatenation of our application source
         * code and all specified vendor source code into a single file.
         */
        compile_js : {
            options : {
                banner : '<%= meta.banner %>'
            },
            src : [
                '<%= files.vendor.js %>',
                'grunt/templates/module.prefix',
                '<%= files.compile_dir %>/**/*.js',
                'grunt/templates/module.suffix'
            ],
            dest : '<%= files.compile_dir %>/<%= pkg.name %>-<%= pkg.version %>.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};
