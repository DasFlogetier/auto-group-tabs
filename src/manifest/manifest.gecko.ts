import baseManifest from './manifest.base.ts'

export default {
  ...baseManifest,
  background: {
    scripts: ['background.js'],
  },
  browser_specific_settings: {
    gecko: {
      id: '@auto-group-tabs.loilo',
      strict_min_version: '133.0',
      data_collection_permissions: {
        required: ['none'],
      },
    },
  },
}
