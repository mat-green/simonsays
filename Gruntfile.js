module.exports = function ( grunt ) {

    var fs = require('fs');
    var path = require('path');
    var matchdep = require('matchdep');
    var suffix = '.js';

    /* add all configuration files */
    var configPath = path.resolve('grunt/config');
    fs.readdirSync(configPath)
        .forEach(function (fileName) {
            if(fileName.indexOf(suffix, this.length - suffix.length) !== -1) {
                require(path.join(configPath, fileName))(grunt);
            }
        });

    /* add all tasks */
    var taskPath = path.resolve('grunt/tasks');
    fs.readdirSync(taskPath)
        .forEach(function (fileName) {
            if(fileName.indexOf(suffix, this.length - suffix.length) !== -1) {
                require(path.join(taskPath, fileName))(grunt);
            }
        });

};
