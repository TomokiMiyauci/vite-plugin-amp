declare module '@ampproject/toolbox-optimizer' {
  export interface AmpOptimizer {
    transformHtml: (html: string) => string
  }

  function create(
    option?: Partial<{
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
    }>
  ): AmpOptimizer
}
