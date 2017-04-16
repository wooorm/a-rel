'use strict';

var assert = require('assert');
var test = require('tape');
var aRel = require('./');

test('aRel', function (t) {
  t.ok(Array.isArray(aRel), 'should be an array');

  t.doesNotThrow(
    function () {
      aRel.forEach(function (rel) {
        assert.equal(typeof rel, 'string', '`' + rel + '` should be a string');
      });
    },
    'should be a list of strings'
  );

  t.end();
});
