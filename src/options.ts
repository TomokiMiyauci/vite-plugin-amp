import { IndexHtmlTransformHook } from 'vite'
import { ViteSSGOptions } from 'vite-ssg'

import replacer from './replacer'
const transform = (ampOptimizer: {
  transformHtml: (html: string) => string
}): IndexHtmlTransformHook => async (html, { bundle, server }) => {
  if (!server?.config.isProduction) {
    html = await ampOptimizer.transformHtml(html)
  }
  if (!bundle) return html

  const replaces = Object.entries(bundle).map(replacer)

  replaces.forEach(([regex, val]) => {
    html = html.replace(regex, val)
  })

  return html
}

const onPageRendered = (
  assetDir: string | undefined,
  ampOptimizer: { transformHtml: (html: string) => string }
): ViteSSGOptions['onPageRendered'] => async (_, html) => {
  html = html.replace(
    `<script type="module"[^>]*?src="/${
      assetDir || 'assets'
    }/.*/.js"[^>]*? />|<link rel="modulepreload"[^>].*href="/${
      assetDir || 'assets'
    }/.*/.js">`,
    ''
  )

  return ampOptimizer.transformHtml(html)
}

export { onPageRendered, transform }
