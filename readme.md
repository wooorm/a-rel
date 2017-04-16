# a-rel [![Build Status][travis-badge]][travis]

List of values viable for use in `rel` attributes on `a`
(and `area`) elements, as defined by [MicroFormats][extensions].

## Installation

[npm][]:

```bash
npm install a-rel
```

## Usage

```javascript
var aRel = require('a-rel');

console.log(aRel.slice(0, 10));
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

## API

### `aRel`

`Array.<string>` — List of lower-case possible link types for `rel`
on `a` and `area` elements.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/a-rel.svg

[travis]: https://travis-ci.org/wooorm/a-rel

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[extensions]: http://microformats.org/wiki/existing-rel-values#HTML5_link_type_extensions
