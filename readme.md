# a-rel

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of values viable for use in `rel` attributes on `a` (and `area`) elements,
as defined by the [MicroFormats][extensions] **formats** and **HTML5 link type
extensions** tables.

## Install

[npm][]:

```sh
npm install a-rel
```

## Use

```js
var aRel = require('a-rel')

console.log(aRel.slice(0, 10))
```

Yields:

```js
[ 'acquaintance',
  'alternate',
  'amphtml',
  'appendix',
  'attachment',
  'bookmark',
  'canonical',
  'category',
  'chapter',
  'child' ]
```

## API

### `aRel`

`Array.<string>` — List of lowercase possible link types for `rel` on `a` and
`area` elements.

## Related

*   [`aria-attributes`](https://github.com/wooorm/aria-attributes)
    — List of ARIA attributes
*   [`html-dangerous-encodings`](https://github.com/wooorm/html-dangerous-encodings)
    — List of dangerous HTML character encoding labels
*   [`html-encodings`](https://github.com/wooorm/html-encodings)
    — List of HTML character encoding labels
*   [`html-link-types`](https://github.com/wooorm/html-link-types)
    — List of link types as used in HTML
*   [`link-rel`](https://github.com/wooorm/link-rel)
    — List of link types for `rel` on `link`
*   [`meta-name`](https://github.com/wooorm/meta-name)
    — List of values for `name` on `meta`
*   [`web-namespaces`](https://github.com/wooorm/web-namespaces)
    — Map of web namespaces

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/a-rel.svg

[build]: https://travis-ci.org/wooorm/a-rel

[downloads-badge]: https://img.shields.io/npm/dm/a-rel.svg

[downloads]: https://www.npmjs.com/package/a-rel

[size-badge]: https://img.shields.io/bundlephobia/minzip/a-rel.svg

[size]: https://bundlephobia.com/result?p=a-rel

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[extensions]: http://microformats.org/wiki/existing-rel-values
