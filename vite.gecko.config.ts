import { defineConfig } from 'vite'
import baseConfig from './vite.base.config'

export default defineConfig({
  ...baseConfig,
  build: {
    ...baseConfig.build,
    outDir: '../extension-gecko',
    target: 'firefox133',
  },
  css: {
    lightningcss: {
      targets: {
        firefox: 133,
      },
    },
  },
})
