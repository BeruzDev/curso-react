//https://www.npmjs.com/package/@vitejs/plugin-react <- Documentacion config de vite

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <- Plugin que permite usar JSX/FastRefresh

export default defineConfig({
  plugins: [react()], // <- Plugin importado
})
