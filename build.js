'use strict'

var fs = require('fs')
var https = require('https')
var concat = require('concat-stream')
var bail = require('bail')
var unified = require('unified')
var html = require('rehype-parse')
var select = require('hast-util-select')
var toString = require('hast-util-to-string')

var proc = unified().use(html)

https.get('https://microformats.org/wiki/existing-rel-values', onconnection)

function onconnection(response) {
  response.pipe(concat(onconcat))
}

function onconcat(buf) {
  var tree = proc.parse(buf)
  var value = table('formats').concat(table('HTML5_link_type_extensions'))

  if (value.length === 0) {
    bail(new Error('Couldn’t find any rels'))
  }

  fs.writeFile('index.json', JSON.stringify(value.sort(), 0, 2) + '\n', bail)

  function table(name) {
    var node = select.select('h2:has(#' + name + ') ~ table', tree)
    var rows = select.selectAll('tr', node).slice(1)
    var index = -1
    var result = []
    var cells

    while (++index < rows.length) {
      cells = select.selectAll('td', rows[index])

      if (/not allowed/i.test(toString(cells[2]).trim())) {
        continue
      }

      result.push(toString(cells[0]).trim())
    }

    return result
  }
}
