import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

// Plugin to copy public files to dist
function copyPublicPlugin() {
  return {
    name: 'copy-public',
    closeBundle() {
      const publicFiles = [
        'manifest.json',
        'background.js',
        'content.js',
        'content.css',
        'icon.png',
        'logo.png',
        'settings.png',
        'dash-1.png',
        'dash-2.png',
        'dash-3.png'
      ]

      publicFiles.forEach(file => {
        try {
          copyFileSync(
            resolve(__dirname, 'public', file),
            resolve(__dirname, 'dist', file)
          )
        } catch (err) {
          console.warn(`Could not copy ${file}:`, err.message)
        }
      })
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyPublicPlugin()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})
