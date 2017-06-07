module.exports = function (grunt) {

    /*
     * We read in our `package.json` file so we can access the package name and
     * version. It's already there, so we don't repeat ourselves here.
     */
    grunt.config.set('pkg', grunt.file.readJSON("package.json"));
    var target = grunt.option('target') || grunt.template.today('yy.mm') + '.0';
    grunt.config.merge({
        pkg: {
            version: target
        }
    });
};
