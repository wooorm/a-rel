import assert from 'node:assert'
import fs from 'node:fs'
import https from 'node:https'
import concatStream from 'concat-stream'
import {bail} from 'bail'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import {select, selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'

const proc = unified().use(rehypeParse)

https.get('https://microformats.org/wiki/existing-rel-values', (response) => {
  response.pipe(
    concatStream((buf) => {
      const tree = proc.parse(buf)
      const value = table('formats').concat(table('HTML5_link_type_extensions'))

      if (value.length === 0) {
        bail(new Error('Couldn’t find any rels'))
      }

      fs.writeFile(
        'index.js',
        [
          '/**',
          ' * List of values for `rel` on `<a>` and `<area>` elements according to',
          ' * Microformats.',
          ' *',
          ' * @type {Array<string>}',
          ' */',
          'export const aRel = ' + JSON.stringify(value.sort(), null, 2),
          ''
        ].join('\n'),
        bail
      )

      /**
       * @param {string} name
       */
      function table(name) {
        const node = select('h2:has(#' + name + ') ~ table', tree)
        assert(node, 'expected table to exist for `' + name + '`')
        const rows = selectAll('tr', node).slice(1)
        let index = -1
        /** @type {Array<string>} */
        const result = []

        while (++index < rows.length) {
          const cells = selectAll('td', rows[index])

          if (/not allowed/i.test(toString(cells[2]).trim())) {
            continue
          }

          result.push(toString(cells[0]).trim())
        }

        return result
      }
    })
  )
})
