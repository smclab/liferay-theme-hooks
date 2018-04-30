var path = require('path');
var browserslist = require('browserslist');
var babel = require('gulp-babel');
var BABEL_PRESET_ENV_PATH = require.resolve('babel-preset-env');

module.exports = function(gulp, options) {
	var runSequence = require('run-sequence').use(gulp);
	var browsers = browserslist(null, { path: path.resolve(options.pathSrc) });

	gulp.task('build-babel-js', function() {
		return gulp.src(path.join(options.pathSrc, 'js/*.js'))
			.pipe(babel({
				presets: [
					[
						BABEL_PRESET_ENV_PATH,
						{
							targets: {
								browsers: browsers
							}
						}
					]
				]
			}))
			.pipe(gulp.dest(path.join(options.pathBuild, 'js/')));
	});
	gulp.hook('after:build:src', function(done) {
		runSequence(
			'build-babel-js',
			done
		);
	});
}
