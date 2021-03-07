import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

import { main, module } from './package.json'

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: module,
      format: 'es',
      sourcemap: true
    }
  ],
  external: ['@ampproject/toolbox-optimizer', 'jimp'],
  watch: {
    include: 'src/**'
  },
  plugins: [
    terser(),
    typescript({ useTsconfigDeclarationDir: false }),
    sourceMaps()
  ]
}

export default config
