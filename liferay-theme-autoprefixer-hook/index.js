var path = require('path');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function(gulp, options) {
	var runSequence = require('run-sequence').use(gulp);

	gulp.task('autoprefix', function() {
		return gulp.src(path.join(options.pathBuild, 'css/*.css'))
			.pipe(autoprefixer())
			.pipe(gulp.dest(path.join(options.pathBuild, 'css/')));
	});

	gulp.hook('after:build:move-compiled-css', function(done) {
		runSequence(
			'autoprefix',
			done
		);
	});
}
