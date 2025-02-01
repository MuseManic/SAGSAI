import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.jsx', // path to your main React entry file
      refresh: true, // Enable hot reloading
    }),
    react(),
  ],
});
