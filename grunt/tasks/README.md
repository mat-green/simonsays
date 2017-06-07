# The `grunt/tasks` Directory

This directory contains a file per task configuration following a [modular concept][eddify]
with the skeleton as follows (or a usual grunt [multitask](http://gruntjs.com/creating-tasks#multi-tasks)):

```javascript
module.exports = function (grunt) {

    grunt.registerTask( 'task', []);
}
```



[eddify]: http://eddify.me/posts/better-grunt-files-for-organised-developers.html
