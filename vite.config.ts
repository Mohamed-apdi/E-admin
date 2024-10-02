import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'; 

export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api": "https://e-commerce-server-moh.onrender.com",
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
