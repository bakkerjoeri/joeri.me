const { task, src, dest, watch, series, parallel } = require('gulp');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));

task('build', series(
	clean,
	buildCss,
));

task('watch', series(
	clean,
	parallel(
		series(buildCss, watchCss),
	),
));

function clean() {
	return del('./public');
}

function buildCss() {
	return src('./src/includes/style/main.scss')
		.pipe(sass()).on('error', sass.logError)
		.pipe(dest('./public/style'))
}

function watchCss() {
	return watch('./src/includes/**/*.scss', buildCss);
}
