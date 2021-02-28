let project_folder = "dist";
let source_folder = "#src";

let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },

    src: {
        html: source_folder + "/",
        css: source_folder + "/css/style.css",
        js: source_folder + "/js/script.js",
        img: source_folder + "/img/**/*.{jpg, png, svg, gif, ico, webp}",
        fonts: source_folder + "/fonts/**/*.{ttf, eot, woff, woff2}",
    },


    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/css/**/*.css",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg, png, svg, gif, ico, webp}"
    },

    clean: "./" + project_folder + "/"
}

let {src, dist} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create();

function browserSync(params) {
    browsersync.init({
        srver: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    });
}
/*
let watch = gulp.parallel(browserSync);

exports.watch = watch;
exports.default = watch;*/
