var path = require('path');
var browserslist = require('browserslist');
var babel = require('gulp-babel');

var BABEL_PRESET_ENV_PATH = require.resolve('babel-preset-env');

var BABEL_PLUGIN_TRANSFORM_ES2015_MODULES_AMD_PATH = require.resolve(
	'babel-plugin-transform-es2015-modules-amd'
);

var BABEL_PLUGIN_NORMALIZE_REQUIRES_PATH = require.resolve(
	'babel-plugin-normalize-requires'
);
var BABEL_PLUGIN_TRANSFORM_NODE_ENV_INLINE_PATH = require.resolve(
	'babel-plugin-transform-node-env-inline'
);
/*
var BABEL_PLUGIN_WRAP_MODULES_AMD_PATH = require.resolve(
	'babel-plugin-wrap-modules-amd'
);
*/
var BABEL_PLUGIN_NAME_AMD_MODULES_PATH = require.resolve(
	'babel-plugin-name-amd-modules'
);
var BABEL_PLUGIN_NAMESPACE_AMD_DEFINE_PATH = require.resolve(
	'babel-plugin-namespace-amd-define'
);

module.exports = function(gulp, options) {
	var runSequence = require('run-sequence').use(gulp);

	// We need to manually retrieve the browserslist config since it is
	// supported only on Babel v7, currently in beta.

	var browsers = browserslist(null, { path: path.resolve(options.pathSrc) });

	var sourceJSGlob = path.join(options.pathSrc, '**', '*.js');

	gulp.task('build-babel-js', function() {
		return gulp
			.src([sourceJSGlob])
			.pipe(
				babel({
					plugins: [
						[BABEL_PLUGIN_TRANSFORM_ES2015_MODULES_AMD_PATH],
						[BABEL_PLUGIN_NORMALIZE_REQUIRES_PATH],
						[BABEL_PLUGIN_TRANSFORM_NODE_ENV_INLINE_PATH],
						//[BABEL_PLUGIN_WRAP_MODULES_AMD_PATH],
						[
							BABEL_PLUGIN_NAME_AMD_MODULES_PATH,
							{
								srcPrefixes: ['pippo']
							}
						],
						[BABEL_PLUGIN_NAMESPACE_AMD_DEFINE_PATH]
					],
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
				})
			)
			.pipe(gulp.dest(options.pathBuild));
	});
	gulp.hook('after:build:src', function(done) {
		runSequence('build-babel-js', done);
	});
};
