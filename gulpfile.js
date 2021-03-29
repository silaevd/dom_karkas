'use strict';

const gulp = require('gulp'),
    atekla_autoprefixer = require('gulp-autoprefixer'),
    atekla_file_include = require('gulp-file-include'),
    atekla_sass = require('gulp-sass'),
    atekla_uglify = require('gulp-uglify'),
    atekla_htmlmin = require('gulp-htmlmin'),
    atekla_browserSync = require('browser-sync'),
    atekla_webp = require('gulp-webp'),
    atekla_clone = require('gulp-clone'),
    atekla_clonesink = atekla_clone.sink(),
    atekla_reload = atekla_browserSync.reload;

const path = {
    build : {
        build_html : './build',
        build_js : './build/js',
        build_css : './build/css',
        build_fonts: './build/fonts',
        build_img : './build/img',
        build_video : './build/vid'
    },
    src : {
        src_html : './src/*.html',
        src_js : './src/js/*.js',
        src_css : './src/css/*.css',
        src_fonts : './src/fonts/**',
        src_video : './src/vid/**',
        src_img : './src/img/**/*.{jpg,jpeg,png,gif,ico,svg}',
    },
    watch : {
        watch_html : './src/**/*.html',
        watch_js : './src/**/*.js',
        watch_css : './src/**/*.css',
        watch_fonts : './src/fonts/**',
        watch_video : './src/vid/**',
        watch_img : './src/img/**/*.{jpg,jpeg,png,gif,ico,svg}',
    }
};

/** Задача Webserver – создает локальный хостинг для верстки */

gulp.task("webserver", function () {
    atekla_browserSync({
        server : {
            baseDir : './'
        },
        host : 'localhost',
        port : '3000',
        tunnel : true
    });
});

/** Задача для работы с изображениями + WebP */

gulp.task("img:build", function () {
    return gulp.src(path.src.src_img)
        .pipe(atekla_clonesink)
        .pipe(atekla_webp({
            quality: 70
        }))
        .pipe(atekla_clonesink.tap())
        .pipe(gulp.dest(path.build.build_img))
        .pipe(atekla_reload({stream:true}))
});

/** Задача для сборки шрифтов*/

gulp.task("fonts:build", function () {
    return gulp.src(path.src.src_fonts)
        .pipe(gulp.dest(path.build.build_fonts))
        .pipe(atekla_reload({stream:true}))
});

/** Задача для сборки видео */

gulp.task("video:build", function () {
    return gulp.src(path.src.src_video)
        .pipe(gulp.dest(path.build.build_video))
        .pipe(atekla_reload({stream:true}))
});

/** Задача для сборки HTML */

gulp.task("html:build", function () {
    return gulp.src(path.src.src_html)
        .pipe(atekla_file_include({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(atekla_htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest(path.build.build_html))
        .pipe(atekla_reload({stream:true}))
});

/** Задача для сборки JS */

gulp.task("js:build", function () {
    return gulp.src(path.src.src_js)
        .pipe(atekla_file_include())
        .pipe(atekla_uglify())
        .pipe(gulp.dest(path.build.build_js))
        .pipe(atekla_reload({stream:true}))
});

/** Задача для сборки CSS */

gulp.task("css:build", function () {
    return gulp.src(path.src.src_css)
        .pipe(atekla_sass({outputStyle: 'compressed'}))
        .pipe(atekla_autoprefixer())
        .pipe(gulp.dest(path.build.build_css))
        .pipe(atekla_reload({stream:true}))
});

/** Задача для отслеживания изменений файлов */

gulp.task('watch', function() {
    gulp.watch(path.watch.watch_css, gulp.series('css:build'));
    gulp.watch(path.watch.watch_js, gulp.series('js:build'));
    gulp.watch(path.watch.html, gulp.series('html:build'));
    gulp.watch(path.watch.watch_img, gulp.series('img:build'));
    gulp.watch(path.watch.watch_fonts, gulp.series('fonts:build'));
    gulp.watch(path.watch.video, gulp.series('video:build'));
});