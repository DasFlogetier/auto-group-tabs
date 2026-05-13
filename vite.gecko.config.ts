import { defineConfig } from 'vite'
import baseConfig from './vite.base.config'

export default defineConfig({
  ...baseConfig,
  define: {
    __TARGET__: JSON.stringify('gecko'),
  },
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
