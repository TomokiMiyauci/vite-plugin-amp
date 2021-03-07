import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Amp from 'vite-plugin-amp'

export default defineConfig({
  plugins: [vue(), Amp()]
})
