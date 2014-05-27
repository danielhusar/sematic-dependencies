# Package Dependencies [![Build Status](https://travis-ci.org/danielhusar/sematic-dependencies.svg)](https://travis-ci.org/danielhusar/sematic-dependencies)

Put the corrent dependencies version inside package.json isntead of * so we dont get unsupported version in future.

## Install

Download [manually](https://github.com/danielhusar/sematic-dependencies/archive/master.zip) or with a package-manager.

#### [npm](https://npmjs.org/package/sematic-dependencies)

```
npm install --global sematic-dependencies
```

### Example

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
