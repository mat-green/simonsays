module.exports = function (grunt) {

    grunt.config.set('watch', {
        options : {
            livereload : true
        },
        karma : {
            files : [
                'build/www/app/**/*.js',
                'build/www/common/**/*.js',
                'src/**/*.spec.js'],
            tasks : ['karma:continuous:run']
        },
        protractor : {
            files : [
                'build/www/app/**/*.js',
                'build/www/common/**/*.js',
                'test/e2e/*.js'],
            tasks : ['protractor:continuous']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
