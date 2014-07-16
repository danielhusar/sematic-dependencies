# Sematic Dependencies [![Build Status](https://travis-ci.org/danielhusar/sematic-dependencies.svg)](https://travis-ci.org/danielhusar/sematic-dependencies)

Put the correct dependencies version inside package.json instead of * so we dont get unsupported version in future.

## Install

Download [manually](https://github.com/danielhusar/sematic-dependencies/archive/master.zip) or with a package-manager.

#### [npm](https://npmjs.org/package/sematic-dependencies)

```
npm install --global sematic-dependencies
```

### Example

If you have you dependencies already installed in node_modules folder, it will get the version from that folder
```javascript
var sd = require('sematic-dependencies');
console.log(sd({
  "dependencies": {
    "object-extend": "*"
  },
  "devDependencies": {
    "mocha": "*",
    "should": "3.3.2"
  }
}));
/*
{
  "dependencies": {
    "object-extend": "^0.5.0"
  },
  "devDependencies": {
    "mocha": "^1.19.0",
    "should": "3.3.2"
  }
}
*/
```

### CLI

Run it from folder where the package.json is located

```bash
$ sd
$ sd -p=~ -i=4
$ sd --prefix=~ --indentation=4
$ sd --prefix=~ --indentation=tab
```

## Options


#### prefix

Type: `String`  
Default: '^'

Prefix for your package dependencies.
(most used are ^ or ~)

## License

MIT © Daniel Husar
