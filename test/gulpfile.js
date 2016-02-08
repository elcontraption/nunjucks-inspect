const connect = require('gulp-connect');
const gulp = require('gulp');
const InspectTag = require('../src');
const nunjucks = require('gulp-nunjucks-render');
const rename = require('gulp-rename');

const env = nunjucks.nunjucks.configure('./', {
    watch: false,
    noCache: true
});

env.addExtension('inspect', new InspectTag());

env.addGlobal('testObj', {
    testProp1: 'testProp1',
    testProp2: 'testProp2'
});

gulp.task('default', ['build'], function () {
    connect.server({
        root: './'
    });
});

gulp.task('build', function () {
    gulp.src('./src.html')
        .pipe(nunjucks())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'));
});