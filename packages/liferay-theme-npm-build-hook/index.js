try {
var liferayNpmBundler = require("liferay-npm-bundler/lib");

function skipInsightPrompt(cb) {
	var prevCI = process.env.CI;

	process.env.CI = 1;

	var result = cb();

	process.env.CI = prevCI;

	return result;
}

module.exports = function(gulp, options) {
	var runSequence = require('run-sequence').use(gulp);
	
	gulp.task('liferay-npm-bundler', function() {
		return skipInsightPrompt(function () {
			return liferayNpmBundler.default(["",""]);
		});
	});

	gulp.hook('after:build-babel-js', function(done) {
		runSequence(
			'liferay-npm-bundler',
			done
		);
	});
}
} catch (e) {
	console.error(e);
	process.exit();
}