/**
 * Created by luiscunha on 3/22/16.
 */

var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require("gulp-util");
var WebpackDevServer = require("webpack-dev-server");
const babel = require('gulp-babel');
var babel_require = require('babel-core/register');
var mocha = require('gulp-mocha');
var env = require('gulp-env');
var uglify = require('gulp-uglify');

gulp.task('set_dev_env', function () {
    env({
        vars: {
            __ENV__: "__DEV__",
        }
    })
});

gulp.task('set_local_env', function () {
    env({
        vars: {
            __ENV__: "__LOCAL__",
        }
    })
});

gulp.task('set_stag_env', function () {
    env({
        vars: {
            __ENV__: "__STAG__",
        }
    })
});

gulp.task('set_prod_env', function () {
    env({
        vars: {
            __ENV__: "__PROD__",
        }
    })
});



gulp.task('webpack-dev', function() {
    process.env.react_env = '__DEV__';
    webpack(
        require('./webpack.config.dev.js')
        , function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
            //callback();
        });
});

gulp.task('webpack-stag', function() {
    process.env.react_env = '__STAG__';
    webpack(
        require('./webpack.config.stag.js')
        , function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
            //callback();
        });
});

gulp.task('webpack-prod', function() {
    process.env.react_env = '__PROD__';
    webpack(
        require('./webpack.config.prod.js')
        , function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
            //callback();
        });
});


gulp.task('webpack-dev-server', function() {
    var compiler = webpack(
        require('./webpack.config.local.js')
    );

    process.env.react_env = '__LOCAL__';

    webpack(
        require('./webpack.config.local.js')
    , function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        //callback();
    });

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8081, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/index.html");

        // keep the server alive or continue?
        // callback();
    });

    // place code for your default task here
    //console.log("starting server");
    //return gulp.src('entry.js')
    //    .pipe(webpack(require('./webpack.config.js')))
    //    .pipe(gulp.dest('./'));
});
gulp.task('default', ['set_local_env', 'webpack-dev-server']);
gulp.task('local', ['set_local_env', 'webpack-dev-server']);
gulp.task('dev', ['set_dev_env', 'webpack-dev']);
gulp.task('stag', ['set_stag_env', 'webpack-stag']);
gulp.task('prod', ['set_prod_env', 'webpack-prod']);

gulp.task('test', function () {
    return gulp.src(['./tests/test.js',], {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan', timeout:5000,
            compilers: {
                js: babel_require
            }}));
});

gulp.task('compress', function() {
    return gulp.src('./dist/stag/bundle.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/stag'));
});

