import AmpOptimizer from '@ampproject/toolbox-optimizer'
import { Plugin } from 'vite'

import { styles } from './constants'
import { onPageRendered, transform } from './options'

const ampOptimizer = AmpOptimizer.create({
  minify: false,
  markdown: true
})
interface Options {
  removeCssImportant?: boolean
}

const DefaultOptions: Options = {
  removeCssImportant: true
}

const plugin = (option?: Options): Plugin => ({
  name: 'vite:amp',

  config: ({ build }) => ({
    build: {
      cssCodeSplit: false
    },
    ssgOptions: {
      onPageRendered: onPageRendered(build?.assetsDir, ampOptimizer)
    }
  }),

  transform: (code, id, ssr) => {
    const { removeCssImportant } = {
      ...DefaultOptions,
      ...option
    }
    if (removeCssImportant && !ssr) {
      if (styles.some((ext) => id.endsWith(`.${ext}`))) {
        code = code.replaceAll(' !important', '')
      }
    }
    return code
  },

  transformIndexHtml: {
    enforce: 'post',
    transform: transform(ampOptimizer)
  }
})

export default plugin
