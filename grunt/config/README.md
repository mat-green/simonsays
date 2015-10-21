# The `grunt/config` Directory

This directory contains a file per task configuration following a [modular concept][eddify]
with the skeleton as follows:

```javascript
module.exports = function (grunt) {

    grunt.config.set('task', {
        options: {
            // default option overrides
        },
        target1: {
            // options and files
        },
        target2: {
            // options and files
        }
      }
    });

    grunt.loadNpmTasks('package-name-for-task');
};
```

The `grunt/config/app` contains all the common file patterns and the *vendor*
*file order*.


[eddify]: http://eddify.me/posts/better-grunt-files-for-organised-developers.html
