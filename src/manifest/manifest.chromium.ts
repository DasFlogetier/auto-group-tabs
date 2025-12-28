import baseManifest from './manifest.base.ts'

export default {
  ...baseManifest,
  background: {
    service_worker: 'background.js',
  },
}
