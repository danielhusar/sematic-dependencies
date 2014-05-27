'use strict';

var extend = require('object-extend');
var sd;

sd = function(object, options){
  var defaults = {
    prefix : '^'
  };
  var opts = extend(defaults, options);
  var info;

  var fixVersion = function(prop, key){
    if(prop[key] === '*') {
      try {
        info = require('./node_modules/' + key + '/package.json');
        prop[key] = opts.prefix + info.version;
      } catch(e) {
        console.warn('Error, package not found for: ' + key, e);
      }
    }
  };

  Object.keys(object.dependencies).forEach(function(key) {
    fixVersion(object.dependencies, key);
  });

  Object.keys(object.devDependencies).forEach(function(key) {
    fixVersion(object.devDependencies, key);
  });
};

module.exports = sd;

sd({
  "name": "package-dependencies",
  "version": "0.0.1",
  "description": "Put the corrent dependencies version inside package.json isntead of * so we dont get unsupported version in future.",
  "keywords": [
    "package",
    "dependencies",
    "devDependencies",
    "modules"
  ],
  "bin": {
    "nmq": "cli.js"
  },
  "scripts": {
    "test": "mocha -R spec"
  },
  "author": {
    "name": "Daniel Husár",
    "email": "dano.husar@gmail.com"
  },
  "files": [
    "cli.js",
    "index.js"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/danielhusar/package-dependencies"
  },
  "dependencies": {
    "object-extend": "*"
  },
  "devDependencies": {
    "mocha": "*",
    "should": "*"
  },
  "readmeFilename": "Readme.md"
});
