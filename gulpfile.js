console.log("Executando o GULP");
var gulp = require("gulp");
var uglifycss = require("gulp-uglifycss");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");
// console.log(gulp);

gulp.task("css", function(){
    console.log("otimizando css");
    gulp.src("src/**/*.css")
        .pipe(uglifycss())
        .pipe(concat("app.min.css"))
        .pipe(gulp.dest("build"));
});

gulp.task("js", function(){
    console.log("otimizando js");
    gulp.src("src/**/*.js")
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(concat("app.min.js"))
        .pipe(gulp.dest("build"));
});