declare module '@ampproject/toolbox-optimizer' {
  export interface AmpOptimizer {
    transformHtml: (html: string) => string
  }

  function create(option?: {
    minify?: boolean
    markdown?: boolean
  }): AmpOptimizer
}
