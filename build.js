'use strict';

var fs = require('fs');
var path = require('path');
var https = require('https');
var bail = require('bail');

https.get('https://help.whatwg.org/extensions/a-rel/', function (res, err) {
  var value = '';

  bail(err);

  res
    .setEncoding('utf8')
    .on('data', function (buf) {
      value += buf;
    })
    .on('end', function (err) {
      bail(err);

      value = value.split('\n').sort().filter(Boolean);

      fs.writeFile('index.json', JSON.stringify(value, 0, 2) + '\n', bail);
    });
});
