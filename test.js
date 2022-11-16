import assert from 'node:assert/strict'
import test from 'node:test'
import {aRel} from './index.js'

test('aRel', function () {
  assert.ok(Array.isArray(aRel), 'should be an array')

  let index = -1
  while (++index < aRel.length) {
    assert.strictEqual(
      typeof aRel[index],
      'string',
      '`' + aRel[index] + '` should be a string'
    )
  }
})
