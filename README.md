vendor-icons
============


[![NPM version](https://img.shields.io/npm/v/vendor-icons.svg)](https://www.npmjs.org/package/vendor-icons)
[![Bower version](https://img.shields.io/bower/v/vendor-icons.svg)](http://bower.io/search/?q=vendor-icons)
[![Packagist version](https://img.shields.io/packagist/v/t1st3/vendor-icons.svg)](https://packagist.org/packages/t1st3/vendor-icons)


[![Dependency Status](https://img.shields.io/david/dev/T1st3/vendor-icons.svg)](https://david-dm.org/t1st3/vendor-icons)
[![Build Status](https://img.shields.io/travis/T1st3/vendor-icons.svg)](https://travis-ci.org/T1st3/vendor-icons)



About
--------

Icons and logos from various vendors of the coding community.


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


The icons are borrowed from the following projects:

* [![Android](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/android.png) Android](https://www.android.com/)
* [![AngularJS](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/angular.png) AngularJS](https://angularjs.org/)
* [![Atom Editor](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/atom.png) Atom Editor](https://atom.io/)
* [![Backbone.js](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/backbone.png) Backbone.js](http://backbonejs.org/)
* [![BitBucket](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/bitbucket.png) BitBucket](https://bitbucket.org/)
* [![BlackBerry](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/blackberry.png) BlackBerry](http://global.blackberry.com/)
* [![Bootstrap](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/bootstrap.png) Bootstrap](http://getbootstrap.com/)
* [![Bower](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/bower.png) Bower](http://bower.io/)
* [![C++](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/c.png) C++](http://en.wikipedia.org/wiki/C%2B%2B)
* [![Chai](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/chai.png) Chai](http://chaijs.com/)
* [![Chrome](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/chrome.png) Chrome](https://www.google.com/chrome/browser/desktop/index.html)
* [![Code Climate](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/code-climate.png) Code Climate](https://codeclimate.com/)
* [![CodeMirror](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/codemirror.png) CodeMirror](http://codemirror.net/)
* [![Codepen](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/codepen.png) Codepen](http://codepen.io/)
* [![Composer](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/composer.png) Composer](https://getcomposer.org/)
* [![Cordova](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/cordova.png) Cordova](http://cordova.apache.org/)
* [![Coveralls](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/coveralls.png) Coveralls](https://coveralls.io/)
* [![CSS3](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/css3.png) CSS3](http://www.w3.org/Style/CSS/)
* [![David-DM](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/david-dm.png) David-DM](https://david-dm.org/)
* [![Debian](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/debian.png) Debian](https://www.debian.org/)
* [![EditorConfig](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/editorconfig.png) EditorConfig](http://editorconfig.org/)
* [![Fedora](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/fedora.png) Fedora](https://getfedora.org/)
* [![Firefox Developer Edition](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/firefox-dev.png) Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
* [![Firefox OS](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/firefox-os.png) Firefox OS](https://www.mozilla.org/en/firefox/os/)
* [![Firefox](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/firefox.png) Firefox](https://www.mozilla.org/firefox/)
* [![Flash](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/flash.png) Flash](https://get.adobe.com/flashplayer/)
* [![Font-Awesome](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/font-awesome.png) Font-Awesome](http://fortawesome.github.io/Font-Awesome/)
* [![Git](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/git.png) Git](http://git-scm.com/)
* [![Github](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/github.png) Github](https://github.com/)
* [![Gradle](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/gradle.png) Gradle](https://gradle.org/)
* [![Grunt](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/grunt.png) Grunt](http://gruntjs.com/)
* [![Gulp](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/gulp.png) Gulp](http://gulpjs.com/)
* [![H5BP](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/h5bp.png) H5BP](https://html5boilerplate.com/)
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
* [![Lo-Dash](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/lodash.png) Lo-Dash](http://lodash.com/)
* [![Lua](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/lua.png) Lua](http://www.lua.org/)
* [![Marionette](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/marionette.png) Marionette](http://marionettejs.com/)
* [![Markdown](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/markdown.png) Markdown](http://daringfireball.net/projects/markdown/)
* [![MDN](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/mdn.png) MDN](https://developer.mozilla.org/)
* [![Mocha](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/mocha.png) Mocha](http://mochajs.org/)
* [![Modernizr](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/modernizr.png) Modernizr](http://modernizr.com/)
* [![Node.js](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/nodejs.png) Node.js](https://nodejs.org/)
* [![NPM](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/npm.png) NPM](https://www.npmjs.com/)
* [![Opera](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/opera.png) Opera](http://www.opera.com)
* [![Packagist](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/packagist.png) Packagist](https://packagist.org/)
* [![PEAR](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/pear.png) PEAR](http://pear.php.net/)
* [![PhantomJS](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/phantomjs.png) PhantomJS](http://phantomjs.org/)
* [![PHP](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/php.png) PHP](http://php.net/)
* [![Polymer](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/polymer.png) Polymer](https://www.polymer-project.org/)
* [![Python](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/python.png) Python](https://www.python.org/)
* [![React](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/react.png) React](https://facebook.github.io/react/)
* [![Require.js](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/requirejs.png) Require.js](http://requirejs.org/)
* [![Ruby](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/ruby.png) Ruby](http://rubyonrails.org/)
* [![RubyGems](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/rubygems.png) RubyGems](https://rubygems.org/)
* [![Safari](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/safari.png) Safari](https://www.apple.com/safari/)
* [![SourceGraph](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/sourcegraph.png) Sourcegraph](https://sourcegraph.com/)
* [![Stack Overflow](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/stack-overflow.png) Stack Overflow](http://stackoverflow.com/)
* [![Tizen](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/tizen.png) Tizen](https://www.tizen.org)
* [![Travis-CI](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/travis-ci.png) Travis-CI](https://travis-ci.org/)
* [![Ubuntu](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/ubuntu.png) Ubuntu](http://www.ubuntu.com/)
* [![VersionEye](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/versioneye.png) VersionEye](https://www.versioneye.com/)
* [![W3C](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/w3c.png) W3C](http://www.w3.org/)
* [![WHATWG](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/whatwg.png) WHATWG](https://whatwg.org/)
* [![Windows 8](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/windows8.png) Windows 8](http://windows.microsoft.com/en-us/windows-8)
* [![Yeoman](https://raw.githubusercontent.com/T1st3/vendor-icons/master/dist/32x32/yeoman.png) Yeoman](http://yeoman.io/)





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



About the rest (all this repository but the icons)
----------

All the content of this repository (excepted the icon pack) 
is licensed under the [MIT license](http://opensource.org/licenses/MIT).

Though, it is just composed a few trivial json files and a Readme.





