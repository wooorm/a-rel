/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module a-rel
 * @fileoverview Test suite for `a-rel`.
 */

'use strict';

/* Module dependencies. */
var test = require('tape');
var aRel = require('./index.js');

/* Tests. */
test('aRel', function (t) {
  t.ok(Array.isArray(aRel), 'should be an `array`');

  aRel.forEach(function (tagName) {
    t.equal(typeof tagName, 'string', '`' + tagName + '` should be a string');
  });

  t.end();
});
