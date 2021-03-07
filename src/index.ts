import AmpOptimizer from '@ampproject/toolbox-optimizer'
import { Plugin } from 'vite'

import { styles } from './constants'
import { onPageRendered, transform } from './options'

interface AMPOptimizerOptions {
  autoAddMandatoryTags: boolean
  autoExtensionImport: boolean
  extensionVersions: Record<string, string>
  format: 'AMP' | 'AMP4EMAIL' | 'AMP4ADS'
  experimentEsm: boolean
  imageBasePath: string
  imageOptimizer: (src: string, width: string) => string
  lts: boolean
  minify: boolean
  markdown: boolean
  optimizeHeroImages: boolean
  preloadHeroImage: boolean
  verbose: boolean
}

interface Options {
  optimizerOptions: Partial<AMPOptimizerOptions>
  removeCssImportant: boolean
}

const DefaultOptions: Partial<Options> = {
  optimizerOptions: {
    minify: true,
    markdown: true
  },
  removeCssImportant: true
}

const plugin = (option?: Partial<Options>): Plugin => {
  const { removeCssImportant, optimizerOptions } = {
    ...DefaultOptions,
    ...option
  }
  const ampOptimizer = AmpOptimizer.create(optimizerOptions)
  return {
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
      if (removeCssImportant && !ssr) {
        if (styles.some((ext) => id.endsWith(`.${ext}`))) {
          code = code.replace(/!important/g, '')
        }
      }
      return code
    },

    transformIndexHtml: {
      enforce: 'post',
      transform
    }
  }
}

export default plugin
