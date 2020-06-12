/**/
var gulp         = require('gulp');          // Подключаем Gulp
var sass         = require("gulp-sass");     // Подключаем Sass пакет
var browser_sync = require("browser-sync");  // Подключаем Browser Sync


/**/
var scss_files = "src/scss/*.scss";
var script_files = "src/js/*.js";
var html_files = "src/html/*.html";


// scss preprocessor
gulp.task('scss', async function() {
    return gulp.src(scss_files)
               .pipe(sass())
               .pipe(gulp.dest("src/css"))
               .pipe(browser_sync.reload({stream: true}));
});

// javascript monitor
gulp.task("script",async function () {
    return gulp.src(script_files)
    .pipe(browser_sync.reload({stream: true}));
});

// html monitor
gulp.task("html", async function () {
    return gulp.src(html_files)
               .pipe(browser_sync.reload({stream: true}));
});

// browser sync
gulp.task("browser-sync", async function () {
    browser_sync({
        server: { baseDir: "src" }
    });
} );

// watch
gulp.task("watch", async function () {
    gulp.watch(scss_files,gulp.parallel("scss"));
    gulp.watch(script_files,gulp.parallel("script"));
    gulp.watch(html_files,gulp.parallel("html"));
});

// default task
gulp.task("default",gulp.parallel("scss","browser-sync","watch"));























/*
var concat       = require('gulp-concat');   // Подключаем gulp-concat (для конкатенации файлов)
var uglify       = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)

var jquery_lib = 'app/libs/jquery/dist/jquery.min.js';
var mag_popup_lib = 'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js';
var script_libs = [jquery_lib, mag_popup_lib];

// javasctipt libs pack
gulp.task("libs_pack",async function () {
    return gulp.src(script_libs)
               .pipe(concat("libs.min.js"))
               .pipe(uglify())
               .pipe(gulp.dest("app/js"));

});
*/