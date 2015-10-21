module.exports = function(grunt) {

    grunt.config.set('watch', {
        /*
         * By default, we want the Live Reload to work for all tasks; this is
         * overridden in some tasks (like this file) where browser resources are
         * unaffected. It runs by default on port 35729, which your browser
         * plugin should auto-detect.
         */
        options : {
            livereload : true
        },

        /**
         * When the Gruntfile changes, we just want to lint it. In fact, when
         * your Gruntfile changes, it will automatically be reloaded!
         */
        gruntfile : {
            files : [ 'Gruntfile.js', 'grunt/**/*.*' ],
            tasks : ['jshint:gruntfile'],
            options : {
                livereload : false
            }
        },

        /**
         * When our JavaScript source files change, we want to run lint them and
         * run our unit tests.
         */
        jssrc : {
            files : ['<%= app_files.js %>'],
            tasks : ['jshint:src', 'karma:unit:run', 'copy:build_appjs']
        },

        /**
         * When our CoffeeScript source files change, we want to run lint them and
         * run our unit tests.
         */
        coffeesrc : {
            files : ['<%= app_files.coffee %>'],
            tasks : ['coffeelint:src', 'coffee:source', 'karma:unit:run', 'copy:build_appjs']
        },

        /**
         * When assets are changed, copy them. Note that this will *not* copy new
         * files, so this is probably not very useful.
         */
        assets : {
            files : ['src/assets/**/*'],
            tasks : ['copy:build_app_assets', 'copy:build_vendor_assets']
        },

        /**
         * When index.html changes, we need to compile it.
         */
        html : {
            files : ['<%= app_files.html %>'],
            tasks : ['index:build']
        },

        /**
         * When our templates change, we only rewrite the template cache.
         */
        tpls : {
            files : ['<%= app_files.atpl %>', '<%= app_files.ctpl %>'],
            tasks : ['html2js']
        },

        /**
         * When the CSS files change, we need to compile and minify them.
         */
        less : {
            files : ['src/less/**/*.less'],
            tasks : ['less:build']
        },

        /**
         * When a JavaScript unit test file changes, we only want to lint it and
         * run the unit tests. We don't want to do any live reloading.
         */
        jsunit : {
            files : ['<%= app_files.jsunit %>'],
            tasks : ['jshint:test', 'karma:unit:run'],
            options : {
                livereload : false
            }
        },

        /**
         * When a CoffeeScript unit test file changes, we only want to lint it and
         * run the unit tests. We don't want to do any live reloading.
         */
        coffeeunit : {
            files : ['<%= app_files.coffeeunit %>'],
            tasks : ['coffeelint:test', 'karma:unit:run'],
        },
        karma : {
            files : ['build/www/app/**/*.js', 'build/www/common/**/*.js', 'src/**/*.spec.js'],
            tasks : ['karma:continuous:run']
        },
        protractor : {
            files : ['build/www/app/**/*.js', 'build/www/common/**/*.js', 'src/scenarios/*.js'],
            tasks : ['protractor:continuous']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
