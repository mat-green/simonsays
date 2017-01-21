module.exports = function(grunt) {

    grunt.config.set('watch', {
        options : {
        },

        /**
         * When the Gruntfile changes, we just want to lint it. In fact, when
         * your Gruntfile changes, it will automatically be reloaded!
         */
        gruntfile : {
            files : [ 'Gruntfile.js', 'grunt/**/*.js' ],
            tasks : ['jshint:gruntfile']
        },

        /**
         * When our JavaScript source files change, we want to run lint them and
         * run our unit tests.
         */
        jssrc : {
            files : [ '<%= files.app.js %>' ],
            tasks : ['jshint:src', 'karma:unit:run']
        },

        /**
         * When our CoffeeScript source files change, we want to run lint them and
         * run our unit tests.
         */
        coffeesrc : {
            files : ['<%= files.app.coffee %>'],
            tasks : ['coffeelint:src', 'coffee:source', 'karma:unit:run']
        },

        /**
         * When assets are changed, copy them. Note that this will *not* copy new
         * files, so this is probably not very useful.
         */
        assets : {
            files : ['<%= files.app.assets %>/**/*'],
            tasks : ['copy:build_app_assets', 'copy:build_vendor_assets']
        },

        /**
         * When index.html changes, we need to compile it.
         */
        html : {
            files : ['<%= files.app.html %>'],
            tasks : ['index:build']
        },

        /**
         * When our templates change, we only rewrite the template cache.
         */
        tpls : {
            files : ['<%= files.app.atpl %>', '<%= files.app.ctpl %>'],
            tasks : ['html2js']
        },

        /**
         * When the CSS files change, we need to compile and minify them.
         */
        less : {
            files : [
                '<%= files.base.src %>/app/**/*.less',
                '<%= files.base.src %>/less/**/*.less'
            ],
            tasks : ['less:build']
        },

        /**
         * When a JavaScript unit test file changes, we only want to lint it and
         * run the unit tests. We don't want to do any live reloading.
         */
        jsunit : {
            files : ['<%= files.app.jsunit %>'],
            tasks : ['jshint:test', 'karma:unit:run']
        },

        /**
         * When a CoffeeScript unit test file changes, we only want to lint it and
         * run the unit tests. We don't want to do any live reloading.
         */
        coffeeunit : {
            files : ['<%= files.app.coffeeunit %>'],
            tasks : ['coffeelint:test', 'karma:unit:run']
        },
        karma : {
            files : ['<%= files.development %>/app/**/*.js', '<%= files.development %>/common/**/*.js', '<%= files.base.src %>/**/*.spec.js'],
            tasks : ['karma:continuous:run']
        },
        protractor : {
            files : ['<%= files.development %>/app/**/*.js', '<%= files.development %>/common/**/*.js', '<%= files.base.src %>/scenarios/*.js'],
            tasks : ['protractor:continuous']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
