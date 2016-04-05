# a-rel [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

List of values viable for use in `rel` attributes on `a`
(and `area`) elements, as defined by [HTML5][spec] and
[MicroFormats][extensions].

## Installation

[npm][]:

```bash
npm install a-rel
```

**a-rel** is also available as an AMD, CommonJS, and globals
module, [uncompressed and compressed][releases].

## Usage

Dependencies:

```javascript
var aRel = require('a-rel');
```

Slicing the first few items:

```javascript
var head = aRel.slice(0, 10);
```

Yields:

```js
[ 'acquaintance',
  'alternate',
  'amphtml',
  'appendix',
  'archived',
  'attachment',
  'bookmark',
  'canonical',
  'category',
  'chapter' ]
```

And, computing `length`:

```javascript
var length = aRel.length;
```

Yields:

```js
69
```

## API

### `aRel`

`Array.<string>` — List of lower-case possible link types for `rel`
on `a` and `area` elements.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/a-rel.svg

[build-page]: https://travis-ci.org/wooorm/a-rel

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/a-rel.svg

[coverage-page]: https://codecov.io/github/wooorm/a-rel?branch=master

[npm]: https://docs.npmjs.com/cli/install

[releases]: https://github.com/wooorm/a-rel/releases

[license]: LICENSE

[author]: http://wooorm.com

[spec]: https://html.spec.whatwg.org/#linkTypes

[extensions]: http://microformats.org/wiki/existing-rel-values#HTML5_link_type_extensions
