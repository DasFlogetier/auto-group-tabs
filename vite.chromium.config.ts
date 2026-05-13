import { defineConfig } from 'vite'
import baseConfig from './vite.base.config'

export default defineConfig({
  ...baseConfig,
  define: {
    __TARGET__: JSON.stringify('chromium'),
  },
  build: {
    ...baseConfig.build,
    outDir: '../extension-chromium',
    target: 'chrome89',
  },
  css: {
    lightningcss: {
      targets: {
        firefox: 89,
      },
    },
  },
})
