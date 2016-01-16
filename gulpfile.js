var pkg = require('./package.json'),

fs = require('fs'),
path = require('path'),
exec = require('child_process').exec,

chalk = require('chalk'),
del = require('del'),
somebody = require('somebody'),
pkgAuthor = somebody.parse(pkg.author),

qrcode = require('qrcode-terminal'),

gulp = require('gulp'),
gm = require('gulp-gm'),
rename = require('gulp-rename'),
imagemin = require('gulp-imagemin'),
minifyCSS = require('gulp-minify-css'),
spriteBuilder = require( 'node-spritesheet' ).Builder;

/*
 * BUILD TASKS
 */

gulp.task('build_clean', [], function () {
  return del(['./dist/**/*.png']);
});

gulp.task('build_img_16', ['build_clean'], function () {
  return gulp.src(['./src/*.png'])
    .pipe(gm(function (gmfile) {
      return gmfile.resize(16, 16);
    }))
    .pipe(gulp.dest('./dist/16x16'));
});

gulp.task('build_img_32', ['build_clean'], function () {
  return gulp.src(['./src/*.png'])
    .pipe(gm(function (gmfile) {
      return gmfile.resize(32, 32);
    }))
    .pipe(gulp.dest('./dist/32x32'));
});

gulp.task('build_img_48', ['build_clean'], function () {
  return gulp.src(['./src/*.png'])
    .pipe(gm(function (gmfile) {
      return gmfile.resize(48, 48);
    }))
    .pipe(gulp.dest('./dist/48x48'));
});

gulp.task('build_img_64', ['build_clean'], function () {
  return gulp.src(['./src/*.png'])
    .pipe(gm(function (gmfile) {
      return gmfile.resize(64, 64);
    }))
    .pipe(gulp.dest('./dist/64x64'));
});

gulp.task('build_img_96', ['build_clean'], function () {
  return gulp.src(['./src/*.png'])
    .pipe(gm(function (gmfile) {
      return gmfile.resize(96, 96);
    }))
    .pipe(gulp.dest('./dist/96x96'));
});

gulp.task('build_img_128', ['build_clean'], function () {
  return gulp.src(['./src/*.png'])
    .pipe(gm(function (gmfile) {
      return gmfile.resize(128, 128);
    }))
    .pipe(gulp.dest('./dist/128x128'));
});

gulp.task('build_img_256', ['build_clean'], function () {
  return gulp.src(['./src/*.png'])
    .pipe(gm(function (gmfile) {
      return gmfile.resize(256, 256);
    }))
    .pipe(gulp.dest('./dist/256x256'));
});

gulp.task('build', [
  'build_img_16', 'build_img_32', 'build_img_48',
  'build_img_64', 'build_img_96', 'build_img_128',
  'build_img_256'
], function (cb) {
  cb();
});

/*
 * SPRITE TASKS
 */

gulp.task('sprite16', [], function (cb) {
  var builder = null,
  images = [];
  fs.readdir('./dist/16x16', function (err, files) {
    if (err) {
      throw err;
    }
    files.forEach(function (file) {
      if (path.extname(file) === '.png') {
        images.push('./dist/16x16/' + file);
      }
    });
    builder = new spriteBuilder({
      outputDirectory: './dist/sprite-16x16',
      outputImage: pkg.name + '.png',
      outputCss: pkg.name + '.css',
      selector: '.' + pkg.name,
      images: images
    });
    builder.build(function() {
      gulp.src('./dist/sprite-16x16/' + pkg.name + '.css')
        .pipe(minifyCSS({keepSpecialComments: '*'}))
        .pipe(rename(pkg.name + '.min.css'))
        .pipe(gulp.dest('./dist/sprite-16x16'));
      cb();
    });
  });
});

gulp.task('sprite32', [], function (cb) {
  var builder = null,
  images = [];
  fs.readdir('./dist/32x32', function (err, files) {
    if (err) {
      throw err;
    }
    files.forEach(function (file) {
      if (path.extname(file) === '.png') {
        images.push('./dist/32x32/' + file);
      }
    });
    builder = new spriteBuilder({
      outputDirectory: './dist/sprite-32x32',
      outputImage: pkg.name + '.png',
      outputCss: pkg.name + '.css',
      selector: '.' + pkg.name,
      images: images
    });
    builder.build(function() {
      gulp.src('./dist/sprite-32x32/' + pkg.name + '.css')
        .pipe(minifyCSS({keepSpecialComments: '*'}))
        .pipe(rename(pkg.name + '.min.css'))
        .pipe(gulp.dest('./dist/sprite-32x32'));
      cb();
    });
  });
});

gulp.task('sprite', ['sprite16', 'sprite32'], function (cb) {
  cb();
});


/*
 * INFO TASK
 */

gulp.task('info', [], function (cb) {
  var txt;
  console.log('\n\n');
  console.log('[' + chalk.green('NAME') + '] ' + pkg.name);
  console.log('[' + chalk.green('DESCRIPTION') + '] ' + pkg.description);
  console.log('[' + chalk.green('VERSION') + '] ' + pkg.version);
  console.log('[' + chalk.green('HOMEPAGE') + '] ' + pkg.homepage);
  console.log('[' + chalk.green('GITHUB REPOSITORY') + '] ' + pkg.repository.url);
  console.log('[' + chalk.green('NPM URL') + '] https://npmjs.org/package/' + pkg.name);
  console.log('[' + chalk.green('BOWER URL') + '] http://bower.io/search/?q=' + pkg.name);
  console.log('[' + chalk.green('BUG TRACKER') + '] ' + pkg.bugs.url);
  console.log('\n');
  txt = '[' + chalk.green('DOWNLOAD LATEST') + '] ';
  txt += 'https://github.com/' + pkgAuthor.name + '/' + pkg.name + '/archive/master.zip';
  console.log(txt);
  txt = '[' + chalk.green('ALL VERSION TAGS') + '] ';
  txt += 'https://github.com/' + pkgAuthor.name + '/' + pkg.name + '/tags';
  console.log(txt);
  txt = '[' + chalk.green('RSS/ATOM FOR VERSION TAGS') + '] ';
  txt += 'https://github.com/' + pkgAuthor.name + '/' + pkg.name + '/tags.atom';
  console.log(txt);
  console.log('\n\n');
  qrcode.generate(pkg.homepage);
  console.log('\n\n');
  cb();
});

gulp.task('default', ['info', 'build']);
