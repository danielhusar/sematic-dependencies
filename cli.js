#!/usr/bin/env node
'use strict';
var fs = require('fs');
var sd = require('./index');

function help() {
  console.log('Usage:');
  console.log('  $ sd');
  console.log('Custom prefix:');
  console.log('  $ sd -p=~ -i=4');
  console.log('  $ sd --prefix=~ --indentation=4');
  console.log('  $ sd --prefix=~ --indentation=tab');
}

function init() {
  try{
    var dependencies = require(process.cwd() + '/package.json');
    var indentation = 2;
    var options = {};

    process.argv.forEach(function (val) {
      var item = val.split('=');
      if(item[0] === '-p' || item[0] === '--prefix') {
        options.prefix = item[1];
      }
      if(item[0] === '-i' || item[0] === '--indentation') {
        if(!isNaN(Number(item[1]))){
          item[1] = Number(item[1]);
        }
        indentation = item[1];
        if(indentation === 'tab'){
          indentation = '\t';
        }
      }
    });

    dependencies = sd(dependencies, options);
    fs.writeFileSync(process.cwd() + '/package.json', JSON.stringify(dependencies, null, indentation));
  }catch(e) {
    console.warn('Error:', e);
  }
}

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(require('./package.json').version);
  return;
}

init();
