import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory (adjust as needed)
    assetsDir: 'assets', // Specify the assets directory (adjust as needed)
    sourcemap: true, // Enable source maps for debugging
    minify: 'terser', // Minify the output using Terser
  },
  server: {
    port: 3000, // Specify the port for the development server
  },
})
