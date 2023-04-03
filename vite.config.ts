import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './src/shared/'),
      '@page': path.resolve(__dirname, './src/page/'),
      '@modules': path.resolve(__dirname, './src/modules/'),
    },
  },
});
