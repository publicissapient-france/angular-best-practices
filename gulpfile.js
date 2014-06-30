var gulp = require('gulp'),
    deploy = require("gulp-gh-pages"),
    exec = require('child_process').exec,
    subtree = require('gulp-subtree'),
    clean = require('gulp-clean'),
    gitBookCmd = "node node_modules/gitbook/bin/gitbook.js";

gulp.task('default', function () {
    exec(gitBookCmd + ' serve', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
});

gulp.task('dist', function () {
    exec(gitBookCmd + ' build ./ --output=./dist', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
});

gulp.task('deploy', ['dist'], function () {
    return gulp.src('dist')
        .pipe(subtree({
            remote: 'origin',
            branch: 'gh-pages',
            message: 'gitbook deployment'
        }))
        .pipe(clean());
});