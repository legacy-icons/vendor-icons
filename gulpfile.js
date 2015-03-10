var pkg = require('./package.json'),

fs = require('fs'),
path = require('path'),
exec = require('child_process').exec,

chalk = require('chalk'),
del = require('del'),
somebody = require('somebody'),
pkgAuthor = somebody.parse(pkg.author),

figletShown = 0,
figlet = require('figlet'),
cowsay = require('cowsay'),
qrcode = require('qrcode-terminal'),

gulp = require('gulp'),
gm = require('gulp-gm'),
imagemin = require('gulp-imagemin'),
notify = require('gulp-notify');

function displayCowsay (txt, cb) {
  console.log('\n\n');
  console.log(chalk.magenta(cowsay.say({
    text: pkg.name + ' - ' + txt,
    e: 'oO',
    T: 'U '
  })));
  console.log('\n\n');
  cb();
}

function triggerNotification (title, txt, cb) {
  gulp.src('./')
    .pipe(notify({
      title: pkg.name + ' - ' + title,
      message: txt
    }));
  cb();
}

gulp.task('figlet', [], function (cb) {
  if (figletShown === 0) {
    figlet.text(pkg.name, {
      font: 'Small',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }, function(err, data) {
      if (err) {
        console.log('Something went wrong with FIGlet');
        console.dir(err);
        return;
      }
      console.log('\n\n');
      console.log(chalk.green(data));
      console.log(chalk.blue(pkg.version));
      console.log('\n\n');
      figletShown = 1;
      cb();
    });
  }
});
/*
 * BUILD TASKS
 */

gulp.task('build_clean', ['figlet'], function (cb) {
  del(['./dist/*'], cb);
});

gulp.task('build_img', ['build_clean'], function (cb) {
  gulp.src(['./src/*.png'])
    .pipe(gm(function (gmfile) {
      return gmfile.resize(16, 16);
    }))
    .pipe(gulp.dest('./dist/16x16'));
  gulp.src(['./src/*.png'])
    .pipe(gm(function (gmfile) {
      return gmfile.resize(32, 32);
    }))
    .pipe(gulp.dest('./dist/32x32'));
  gulp.src(['./src/*.png'])
    .pipe(gm(function (gmfile) {
      return gmfile.resize(48, 48);
    }))
    .pipe(gulp.dest('./dist/48x48'));
  gulp.src(['./src/*.png'])
    .pipe(gm(function (gmfile) {
      return gmfile.resize(64, 64);
    }))
    .pipe(gulp.dest('./dist/64x64'));
  gulp.src(['./src/*.png'])
    .pipe(gm(function (gmfile) {
      return gmfile.resize(96, 96);
    }))
    .pipe(gulp.dest('./dist/96x96'));
  gulp.src(['./src/*.png'])
    .pipe(gm(function (gmfile) {
      return gmfile.resize(128, 128);
    }))
    .pipe(gulp.dest('./dist/128x128'));
  gulp.src(['./src/*.png'])
    .pipe(gm(function (gmfile) {
      return gmfile.resize(256, 256);
    }))
    .pipe(gulp.dest('./dist/256x256'));
});

gulp.task('build', ['build_img'], function (cb) {
  triggerNotification ('Builder', 'Successfully built application', function () {
    displayCowsay('gulp build - DONE', cb);
  });
});
