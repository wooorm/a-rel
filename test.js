import assert from 'node:assert'
import test from 'tape'
import {aRel} from './index.js'

test('aRel', function (t) {
  t.ok(Array.isArray(aRel), 'should be an array')

  t.doesNotThrow(function () {
    let index = -1
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
