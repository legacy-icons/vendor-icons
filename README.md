vendor-icons
============


[![NPM version](https://img.shields.io/npm/v/vendor-icons.svg)](https://www.npmjs.org/package/vendor-icons)
[![Bower version](https://img.shields.io/bower/v/vendor-icons.svg)](http://bower.io/search/?q=vendor-icons)
[![Packagist version](https://img.shields.io/packagist/v/t1st3/vendor-icons.svg)](https://packagist.org/packages/t1st3/vendor-icons)
[![Nuget version](https://img.shields.io/nuget/v/vendor-icons.svg)](https://www.nuget.org/packages/vendor-icons/)

[![Dependency Status](https://img.shields.io/david/dev/T1st3/vendor-icons.svg)](https://david-dm.org/t1st3/vendor-icons)
[![Build Status](https://img.shields.io/travis/T1st3/vendor-icons.svg)](https://travis-ci.org/T1st3/vendor-icons)



About
--------

Icons and logos from various vendors of the coding community. While the project is opened to new icons, its author admits the project is kind of orientated towards JavaScript / Web & HTML5 / HybridApps.


This project just provides icons from various projects. All icons are made available through the following dimensions (in pixels):

* 16x16
* 32x32
* 48x48
* 64x64
* 96x96
* 128x128
* 256x256


CSS spritesheets
----------

You can insert the icons directly into your HTML with a common IMG tag:

```
    <img alt="Github logo" src="dist/32x32/github.png" width="32" height="32">
```


In addition to the icons by themselves, this project also ships a CSS spritesheet for the icon-pack. This spritesheet allows to load the entire icon-pack in just 1 image, and thus reduce HTTP calls.

This is what it actually looks:

![Spritesheet](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/sprite-32x32/vendor-icons.png)
![Spritesheet](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/sprite-16x16/vendor-icons.png)


All the positioning of the icons inside this alone image is made through CSS, which allows you to just add block-type tags with the proper class and get the same result:

```
    <div class="vendor-icons github"></div>
```

Just remember to add the CSS stylesheet to the HEAD of your HTML page!


Get the package with NPM
----------

Just run the following on the CLI (provided your CLI is directed to your work directory)

```
npm install vendor-icons
```



Get the package with Bower
----------

Just run the following on the CLI (provided your CLI is directed to your work directory)

```
bower install vendor-icons
```


Get the package with Composer / Packagist
----------

Just run the following on the CLI (provided your CLI is directed to your work directory)

```
composer require t1st3/vendor-icons
```


Get the package with NuGet
----------

Just run the following on the CLI (provided your CLI is directed to your work directory)

```
Install-Package vendor-icons
```




License
---------

Each icon in this project belong to its original author, and for most of them, they are copyrighted. Some of these icons may not match their project's official icon/logo.

Actually, this icon set is quite opinionated, but is definitely open to improvements, or critics.

Please note that the project "vendor-icons" does not consider these icons as free-to-use by default: 
if you want to use these icons in your project, you may|shall|should|must check with the rightful owners that your use of the icon is OK.

This project is meant to follow any kind of "upstream-design". 
Let's say NPM creates a Github repository to host SVG/EPS/AI for the NPM logo, then `vendor-icons`'s vocation would be to create a workflow to take the repository as a source for the NPM icon. 
Each project and/or company handles graphic assets in different manners, and then, `vendor-icons` can not give general guidelines for use or licensing, since each icon may have its own guidelines/policy/license.

Please refer the rightful owners in case you don't know whether your use of any icon is legit or not.



The icons are borrowed from the following projects:

* [![Air](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/air.png) Air](https://get.adobe.com/air/)
* [![Android](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/android.png) Android](https://www.android.com/)
* [![AngularJS](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/angular.png) AngularJS](https://angularjs.org/)
* [![Apache](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/apache.png) Apache](http://httpd.apache.org/)
* [![Atom Editor](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/atom.png) Atom Editor](https://atom.io/)
* [![Backbone.js](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/backbone.png) Backbone.js](http://backbonejs.org/)
* [![BitBucket](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/bitbucket.png) BitBucket](https://bitbucket.org/)
* [![BlackBerry](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/blackberry.png) BlackBerry](http://global.blackberry.com/)
* [![Bootstrap](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/bootstrap.png) Bootstrap](http://getbootstrap.com/)
* [![Bower](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/bower.png) Bower](http://bower.io/)
* [![C++](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/c.png) C++](http://en.wikipedia.org/wiki/C%2B%2B)
* [![Chai](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/chai.png) Chai](http://chaijs.com/)
* [![Chrome](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/chrome.png) Chrome](https://www.google.com/chrome/browser/desktop/index.html)
* [![Chromium](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/chromium.png) Chromium](https://www.chromium.org/)
* [![Code Climate](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/code-climate.png) Code Climate](https://codeclimate.com/)
* [![CodeIgniter](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/codeigniter.png) CodeIgniter](https://codeigniter.com/)
* [![CodeMirror](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/codemirror.png) CodeMirror](http://codemirror.net/)
* [![Codepen](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/codepen.png) Codepen](http://codepen.io/)
* [![Composer](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/composer.png) Composer](https://getcomposer.org/)
* [![Cordova](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/cordova.png) Cordova](http://cordova.apache.org/)
* [![CouchDB](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/couchdb.png) CouchDB](http://couchdb.apache.org/)
* [![Coveralls](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/coveralls.png) Coveralls](https://coveralls.io/)
* [![CSS3](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/css3.png) CSS3](http://www.w3.org/Style/CSS/)
* [![David-DM](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/david-dm.png) David-DM](https://david-dm.org/)
* [![Debian](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/debian.png) Debian](https://www.debian.org/)
* [![Django](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/django.png) Django](https://www.djangoproject.com/)
* [![Drupal](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/drupal.png) Drupal](https://www.drupal.org/)
* [![EditorConfig](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/editorconfig.png) EditorConfig](http://editorconfig.org/)
* [![Fedora](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/fedora.png) Fedora](https://getfedora.org/)
* [![Firefox Developer Edition](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/firefox-dev.png) Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
* [![Firefox OS](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/firefox-os.png) Firefox OS](https://www.mozilla.org/en/firefox/os/)
* [![Firefox](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/firefox.png) Firefox](https://www.mozilla.org/firefox/)
* [![Flash](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/flash.png) Flash](https://get.adobe.com/flashplayer/)
* [![Flattr](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/flattr.png) Flattr](https://flattr.com/)
* [![Font-Awesome](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/font-awesome.png) Font-Awesome](http://fortawesome.github.io/Font-Awesome/)
* [![Git](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/git.png) Git](http://git-scm.com/)
* [![Gitbook](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/gitbook.png) Gitbook](https://www.gitbook.com/)
* [![Github](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/github.png) Github](https://github.com/)
* [![Gitlab](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/gitlab.png) Gitlab](https://about.gitlab.com/)
* [![GNU](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/gnu.png) GNU](https://www.gnu.org/)
* [![Gradle](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/gradle.png) Gradle](https://gradle.org/)
* [![Grunt](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/grunt.png) Grunt](http://gruntjs.com/)
* [![GTK](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/gtk.png) GTK](http://www.gtk.org/)
* [![Gulp](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/gulp.png) Gulp](http://gulpjs.com/)
* [![H5BP](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/h5bp.png) H5BP](https://html5boilerplate.com/)
* [![HBase](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/hbase.png) HBase](http://hbase.apache.org/)
* [![HTML5](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/html5.png) HTML5](http://www.w3.org/TR/html5/)
* [![Humans.txt](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/humans-txt.png) Humans.txt](http://humanstxt.org/)
* [![Internet Explorer](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/ie.png) Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/download-ie)
* [![Inch-CI](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/inch-ci.png) Inch-CI](https://inch-ci.org/)
* [![iOS](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/ios.png) iOS](https://www.apple.com/ios/)
* [![Java](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/java.png) Java](https://www.java.com/)
* [![Jekyll](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/jekyll.png) Jekyll](http://jekyllrb.com/)
* [![jQuery](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/jquery.png) jQuery](http://jquery.com/)
* [![JSBin](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/jsbin.png) JSBin](http://jsbin.com)
* [![JSON](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/json.png) JSON](http://json.org/)
* [![Linux](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/linux.png) Linux](https://www.kernel.org/)
* [![Lo-Dash](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/lodash.png) Lo-Dash](http://lodash.com/)
* [![Lua](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/lua.png) Lua](http://www.lua.org/)
* [![MariaDB](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/mariadb.png) MariaDB](https://mariadb.org/)
* [![Marionette](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/marionette.png) Marionette](http://marionettejs.com/)
* [![Markdown](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/markdown.png) Markdown](http://daringfireball.net/projects/markdown/)
* [![MDN](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/mdn.png) MDN](https://developer.mozilla.org/)
* [![Mocha](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/mocha.png) Mocha](http://mochajs.org/)
* [![Modernizr](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/modernizr.png) Modernizr](http://modernizr.com/)
* [![MongoDB](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/mongodb.png) MongoDB](https://www.mongodb.org/)
* [![MySQL](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/mysql.png) MySQL](http://www.mysql.com/)
* [![Nginx](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/nginx.png) Nginx](http://nginx.org/)
* [![Node.js](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/nodejs.png) Node.js](https://nodejs.org/)
* [![NPM](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/npm.png) NPM](https://www.npmjs.com/)
* [![OpenGL](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/opengl.png) OpenGL](https://www.opengl.org/)
* [![OpenHub](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/openhub.png) OpenHub](https://www.openhub.net/)
* [![Opera](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/opera.png) Opera](http://www.opera.com)
* [![Packagist](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/packagist.png) Packagist](https://packagist.org/)
* [![PEAR](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/pear.png) PEAR](http://pear.php.net/)
* [![Perl](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/perl.png) Perl](https://www.perl.org/)
* [![PhantomJS](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/phantomjs.png) PhantomJS](http://phantomjs.org/)
* [![Phonegap](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/phonegap.png) Phonegap](http://phonegap.com/)
* [![PHP](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/php.png) PHP](http://php.net/)
* [![Polymer](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/polymer.png) Polymer](https://www.polymer-project.org/)
* [![PostgreSQL](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/postgresql.png) PostgreSQL](http://www.postgresql.org/)
* [![Python](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/python.png) Python](https://www.python.org/)
* [![Qt](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/qt.png) Qt](http://www.qt.io/)
* [![React](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/react.png) React](https://facebook.github.io/react/)
* [![Redis](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/redis.png) Redis](http://redis.io/)
* [![Require.js](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/requirejs.png) Require.js](http://requirejs.org/)
* [![Ruby](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/ruby.png) Ruby](http://rubyonrails.org/)
* [![RubyGems](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/rubygems.png) RubyGems](https://rubygems.org/)
* [![Safari](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/safari.png) Safari](https://www.apple.com/safari/)
* [![SourceForge](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/sourceforge.png) SourceForge](http://sourceforge.net/)
* [![SourceGraph](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/sourcegraph.png) Sourcegraph](https://sourcegraph.com/)
* [![Sqlite](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/sqlite.png) Sqlite](https://www.sqlite.org/)
* [![SVG](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/svg.png) SVG](http://www.w3.org/Graphics/SVG/)
* [![SVN/Subversion](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/svn.png) SVN/Subversion](https://subversion.apache.org/)
* [![Symfony](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/symfony.png) Symfony](http://symfony.com/)
* [![Stack Overflow](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/stack-overflow.png) Stack Overflow](http://stackoverflow.com/)
* [![Titanium](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/titanium.png) Titanium](http://www.appcelerator.com/product/)
* [![Tizen](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/tizen.png) Tizen](https://www.tizen.org)
* [![Travis-CI](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/travis-ci.png) Travis-CI](https://travis-ci.org/)
* [![Unity](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/unity.png) Unity](http://unity3d.com/)
* [![Ubuntu](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/ubuntu.png) Ubuntu](http://www.ubuntu.com/)
* [![VersionEye](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/versioneye.png) VersionEye](https://www.versioneye.com/)
* [![W3C](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/w3c.png) W3C](http://www.w3.org/)
* [![WebGL](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/webgl.png) WebGL](https://www.khronos.org/webgl/)
* [![Webkit](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/webkit.png) Webkit](https://www.webkit.org/)
* [![WHATWG](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/whatwg.png) WHATWG](https://whatwg.org/)
* [![Windows 8](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/windows8.png) Windows 8](http://windows.microsoft.com/en-us/windows-8)
* [![WordPress](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/xamarin.png) Xamarin](http://xamarin.com/)
* [![Xamarin](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/wordpress.png) WordPress](https://wordpress.org/)
* [![Yeoman](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/yeoman.png) Yeoman](http://yeoman.io/)
* [![Zend](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/zend.png) Zend](http://framework.zend.com/)





About the rest (all this repository but the icons)
----------

All the content of this repository (excepted the icon pack) 
is licensed under the [MIT license](http://opensource.org/licenses/MIT).

Though, it is just composed a few trivial json files and a Readme.





