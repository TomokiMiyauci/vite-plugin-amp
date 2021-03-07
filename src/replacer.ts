import { OutputAsset, OutputChunk } from 'rollup'

const replacer = ([, value]: [string, OutputAsset | OutputChunk]): readonly [
  RegExp,
  string
] => {
  const { fileName } = value
  if (fileName.endsWith('.css') && value.type === 'asset') {
    const reCSS = new RegExp(
      `<link rel="stylesheet"[^>]*?href="/${fileName}"[^>]*?>`
    )

    const code = `<style amp-custom>
      ${(value as OutputAsset).source.toString()}
    </style>`

    return [reCSS, code] as const
  } else if ((value as OutputChunk)?.code) {
    const reScript = new RegExp(
      `<script type="module"[^>]*?src="/${fileName}"[^>]*?></script>|<link rel="modulepreload"[^>]*?href="/${fileName}">`
    )
    return [reScript, '']
  }

  return ([] as unknown) as readonly [RegExp, string]
}

export default replacer
