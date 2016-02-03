/**
 * Gulpfile
 * @author Richard Santos <rsantos@tray.com.br>
 */

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  concat = require("gulp-concat"),
  minifyCSS = require("gulp-minify-css"),
  uglify = require("gulp-uglify"),
  path = require("path");

var SASSPATH, CSSPATH, JSPATH;

gulp.task('sass', function(){
  gulp.src(SASSPATH + '/theme.min.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(concat('theme.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(CSSPATH));
});

gulp.task('js', function(){
  gulp.src(JSPATH + "/*.js")
    .pipe(concat("theme.min.js"))
    .pipe(uglify({"compress": false}))
    .pipe(gulp.dest(path.resolve(JSPATH, "../")));
});

// src plugins
var pluginsFile = path.resolve(process.cwd(), "../plugins");

gulp.task('plugins', function(){
  gulp.src(pluginsFile + "/*.js")
    .pipe(concat("plugins.min.js"))
    .pipe(uglify({"compress": false}))
    .pipe(gulp.dest(pluginsFile + "/dist/"));
});

// watchers
var cssWatcher = gulp.watch('**/*.scss', ['sass']);
cssWatcher.on("change", function(event) {
  SASSPATH = path.resolve(event.path, "../");
  CSSPATH  = path.resolve(event.path, "../../");
});

// este watcher é para criar pastas no diretorio sass
var cssWatcher = gulp.watch('**/*/*.scss', ['sass']);
cssWatcher.on("change", function(event) {
  SASSPATH = path.resolve(event.path, "../../");
  CSSPATH  = path.resolve(event.path, "../../../");
});

var jsWatcher = gulp.watch('**/js/modules/*.js', ['js']);
jsWatcher.on("change", function(event) {
  JSPATH = path.resolve(event.path, "../");
});

gulp.task("default", ["plugins"]);
