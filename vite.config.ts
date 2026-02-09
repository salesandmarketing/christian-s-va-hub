import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // Add '-swc' here
import path from 'path'

export default defineConfig(({ mode }) => ({
  base: "/", 
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    // This helps debug if files are missing
    sourcemap: true, 
  },
}));
