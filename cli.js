#!/usr/bin/env node
'use strict';
var fs = require('fs');
var path = require('path');
var pkg = require('./package.json');
var sd = require('./index');


function help() {
  console.log(pkg.description);
  console.log('');
  console.log('Usage:');
  console.log('  $ sd');
  console.log('Custom prefix:');
  console.log('  $ sd -p=~ -i=4');
  console.log('  $ sd --prefix=~ --indentation=4');
  console.log('  $ sd --prefix=~ --indentation=tab');
}

function init(data) {
  var dependencies = require(path.dirname(fs.realpathSync(__filename)) + '/package.json');
  var indentation = 2;
  process.argv.forEach(function (val) {
    var item = val.split('=');
    var options = {};
    if(item[0] == '-p' || item[0] == '--prefix') {
      options.prefix = item[1];
    }
    if(item[0] == '-i' || item[0] == '--indentation') {
      if(!isNaN(Number(item[1]))){
        item[1] = Number(item[1]);
      }
      indentation = item[1];
      if(indentation === 'tab'){
        indentation = '\t';
      }
    }
  });

  dependencies = sd(dependencies);
  fs.writeFileSync(path.dirname(fs.realpathSync(__filename)) + '/package.json', JSON.stringify(dependencies, null, indentation));
}

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

init();
