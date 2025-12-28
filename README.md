# Auto-Group Tabs

This is a browser extension for Google Chrome and Firefox which enables the configuration of tab groups for certain URLs. Navigating to such a URL will automatically add the tab to its configured group (creating the group if it does not exist).

## Development

This project is built with [Vue](https://v3.vuejs.org/) and [Vite](https://vitejs.dev/).

### Setup

> **Requirements:** Note that at least Node.js v24 is needed to develop and build this project.

Clone this project:

```bash
git clone https://github.com/loilo/auto-group-tabs.git
```

Step into the cloned folder and install [npm](https://www.npmjs.com/) dependencies:

```bash
npm ci
```

### Development of the Options UI

The fastest way to tinker with the heart of this extension — its options page — is to run the `dev` script:

```bash
npm run dev
```

This will start up the Vite dev server and serve the options page on [localhost:6655](http://localhost:6655/). Having the options page directly in the browser allows for comfort features like hot module reloading to be usable during development.

In this mode, Chrome extension APIs accessed during production (e.g. `chrome.i18n` and `chrome.storage`) use browser-based fallbacks.

> **Note:** You probably want to use the [device toolbar](https://developers.google.com/web/tools/chrome-devtools/device-mode) of Chrome's devtools to give the options page a proper viewport. Chrome's options overlays are (at the time of writing) 400px wide, and I used a height of 600px during development.

### Testing in the Browser

#### Chrome

To test the extension in Chrome, you'll have to do a production build of it:

```bash
npm run build:chromium
```

This will create a subfolder with the name `extension-chromium` inside the project, which can be installed in your Chrome browser.

#### Firefox

To test the extension in Firefox, you'll have to do a production build of it and zip it:

```bash
npm run pack:gecko
```

This will create a file named `auto-group-tabs.gecko.zip` inside the project root, which can be temporarily added under `about:debugging#/runtime/this-firefox`.

### Do a Production Build

Skim through the `package.json` to find what to run for your target browser. To do all the work necessary for distributing the extension, run:

```bash
npm run deploy
```

This will run all tests, create production builds for all supported browsers, and pack them into zip files ready for upload to the respective extension stores.
