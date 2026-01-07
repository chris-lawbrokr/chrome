# Lawbrokr Chrome Extension

A Chrome extension built with React and Vite.

## Project Structure

```
chrome-extension/
├── public/              # Static files (copied to dist during build)
│   ├── manifest.json    # Chrome extension manifest
│   ├── background.js    # Service worker script
│   └── vite.svg        # Icons/images
├── src/                # Source files
│   ├── App.jsx         # Main React component
│   ├── App.css         # Component styles
│   ├── main.jsx        # React entry point
│   └── index.css       # Global styles
├── dist/               # Built extension (load this in Chrome)
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Development

### Install Dependencies
```bash
npm install
```

### Build for Production
```bash
npm run build
```

This builds the extension to the `dist/` folder.

### Load Extension in Chrome

1. Run `npm run build` to build the extension
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the `dist` folder

### Making Changes

1. Edit files in `src/` for React code
2. Edit files in `public/` for extension-specific files (manifest, background script)
3. Run `npm run build` to rebuild
4. Reload the extension in Chrome

## How It Works

- **Vite** bundles your React app and outputs to `dist/`
- Files in `public/` are automatically copied to `dist/` during build
- The extension uses a **side panel** that opens when you click the extension icon
- The side panel displays your React app
