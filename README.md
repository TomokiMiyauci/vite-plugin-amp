<div align="center">
  <img width="180" src="https://res.cloudinary.com/dz3vsv9pg/image/upload/v1615115327/vite-plugin-amp/logo.png" alt="vite-plugin-amp logo">

[![npm version](https://img.shields.io/npm/v/vite-plugin-amp.svg?style=flat)](https://www.npmjs.com/package/file-select-dialog)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![MIT License](https://img.shields.io/npm/l/file-select-dialog?color=blue&registry_uri=https%3A%2F%2Fregistry.npmjs.com)](https://github.com/TomokiMiyauci/blog/blob/master/LICENSE)

</div>

# vite-plugin-amp

> Vite plugin for AMP project

## Features

- Remove all denied script tag
- Inline all styles to `amp-custom`
- `img` tag to `amp-img`
- Automatically import all missing AMP component scripts.
- Automatically add any missing mandatory AMP tags.
- Optimize via [amp-toolbox](https://github.com/ampproject/amp-toolbox/tree/master/packages/optimizer)
- Full AMP

## Usage

```bash
npm i vite-plugin-amp @ampproject/toolbox-optimizer -D # yarn add vite-plugin-amp -D
```

Add it to `vite.config.ts`

```ts:vite.config.ts
// vite.config.ts
import ViteAMP from 'vite-plugin-amp'

export default {
  plugins: [ViteAMP()]
}
```

## Support

Support for only Server Side Generation.
Please see [example](https://github.com/TomokiMiyauci/vite-plugin-amp/tree/main/example).

- [x] Vue3
- [ ] React
- [ ] Preact
- [ ] lit-element

## Limitation

AMP Project has limitation of Native JavaScript.
Native Javascript doesn't work unless it's in the [`amp-script`](https://amp.dev/ja/documentation/components/amp-script/?format=websites) tag.

If you want to manage state, you can use [`amp-bind`](https://amp.dev/ja/documentation/components/amp-bind/) tag.

## Todo

- [ ] Frameworks other than Vue3
- [ ] Add custom CSS size check
- [ ] Hybrid mode
- [ ] Optimize development environment

## License

MIT
