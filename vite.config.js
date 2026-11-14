import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps every asset path relative, so the build works under https://<user>.github.io/portfolio/
export default defineConfig({
  base: './',
  plugins: [react()],
});
