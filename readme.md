# a-rel

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of values for `rel` on `<a>` and `<area>` elements according to
[Microformats][].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`aRel`](#arel)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package lists values that are allowed in `rel` attributes on `<a>` and
`<area>` elements.
These values come from [Microformats][].

## When should I use this?

Use this package for a list of MicroFormats extensions on `<a>` and `<area>`
elements.
See [`link-rel`][link-rel] for a list of MicroFormats extensions to `<link>`
and [`html-link-types`][html-link-types] if you specifically need to check which
values are allowed by the HTML spec.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install a-rel
```

In Deno with [Skypack][]:

```js
import {aRel} from 'https://cdn.skypack.dev/a-rel@3?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {aRel} from 'https://cdn.skypack.dev/a-rel@3?min'
</script>
```

## Use

```js
import {aRel} from 'a-rel'

console.log(aRel.slice(0, 10))
```

Yields:

```js
[
  'about',
  'acquaintance',
  'alternate',
  'amphtml',
  'appendix',
  'archived',
  'attachment',
  'bookmark',
  'canonical',
  'category'
]
```

## API

This package exports the following identifiers: `aRel`.
There is no default export.

### `aRel`

List of lowercase types (`Array<string>`).

## Types

This package is fully typed with [TypeScript][].
There are no extra exported types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/html-link-types`][html-link-types]
    — list of link types for `rel` according to HTML
*   [`wooorm/link-rel`][link-rel]
    — list of link types for `rel` on `link`
*   [`wooorm/aria-attributes`](https://github.com/wooorm/aria-attributes)
    — list of ARIA attributes
*   [`wooorm/html-dangerous-encodings`](https://github.com/wooorm/html-dangerous-encodings)
    — list of dangerous HTML character encoding labels
*   [`wooorm/html-encodings`](https://github.com/wooorm/html-encodings)
    — list of HTML character encoding labels
*   [`wooorm/meta-name`](https://github.com/wooorm/meta-name)
    — list of values for `name` on `meta`
*   [`wooorm/web-namespaces`](https://github.com/wooorm/web-namespaces)
    — map of web namespaces

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/a-rel/workflows/main/badge.svg

[build]: https://github.com/wooorm/a-rel/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/a-rel.svg

[coverage]: https://codecov.io/github/wooorm/a-rel

[downloads-badge]: https://img.shields.io/npm/dm/a-rel.svg

[downloads]: https://www.npmjs.com/package/a-rel

[size-badge]: https://img.shields.io/bundlephobia/minzip/a-rel.svg

[size]: https://bundlephobia.com/result?p=a-rel

[npm]: https://docs.npmjs.com/cli/install

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[microformats]: http://microformats.org/wiki/existing-rel-values

[link-rel]: https://github.com/wooorm/link-rel

[html-link-types]: https://github.com/wooorm/html-link-types
