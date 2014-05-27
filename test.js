'use strict';
var should = require('should');
var sd = require('./index.js');

describe('Sematic versions', function(){

  it('It should create sematic dependencies', function () {
    var output = sd({
      'dependencies': {
        'object-extend': '*'
      },
      'devDependencies': {
        'mocha': '*',
        'should': '0.0.1'
      }
    });

    var extend = require('./node_modules/object-extend/package.json').version;
    var mocha = require('./node_modules/mocha/package.json').version;
    ('^' + extend).should.equal(output.dependencies['object-extend']);
    ('^' + mocha).should.equal(output.devDependencies['mocha']);
    '0.0.1'.should.equal(output.devDependencies['should']);
  });

  it('It should create sematic dependencies with custom option', function () {
    var output = sd({
      'dependencies': {
        'object-extend': '*'
      },
      'devDependencies': {
        'mocha': '*',
        'should': '0.0.1'
      }
    }, {
      prefix: '~'
    });

    var extend = require('./node_modules/object-extend/package.json').version;
    var mocha = require('./node_modules/mocha/package.json').version;
    ('~' + extend).should.equal(output.dependencies['object-extend']);
    ('~' + mocha).should.equal(output.devDependencies['mocha']);
    '0.0.1'.should.equal(output.devDependencies['should']);
  });

});
