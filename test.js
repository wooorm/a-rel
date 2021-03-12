'use strict'

var assert = require('assert')
var test = require('tape')
var aRel = require('.')

test('aRel', function (t) {
  t.ok(Array.isArray(aRel), 'should be an array')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < aRel.length) {
      assert.strictEqual(
        typeof aRel[index],
        'string',
        '`' + aRel[index] + '` should be a string'
      )
    }
  }, 'should be a list of strings')

  t.end()
})
