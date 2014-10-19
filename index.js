'use strict';

var extend = require('object-extend');
var sd;

sd = function (object, options) {
  var defaults = {
    prefix : '^'
  };
  var opts = extend(defaults, options);
  var info;

  var fixVersion = function (prop, key) {
    if (prop[key] === '*') {
      try {
        info = require(process.cwd() + '/node_modules/' + key + '/package.json');
        prop[key] = opts.prefix + info.version;
      } catch(e) {
        console.warn('Error, package not found for: ' + key, e);
      }
    }
  };

  if (object.dependencies) {
    Object.keys(object.dependencies).forEach(function (key) {
      fixVersion(object.dependencies, key);
    });
  }

  if (object.devDependencies) {
    Object.keys(object.devDependencies).forEach(function (key) {
      fixVersion(object.devDependencies, key);
    });
  }

  return object;
};

module.exports = sd;
