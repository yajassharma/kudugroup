import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite';

=======
>>>>>>> ef8a07290aec01352aa31111ed0ecd1bc34923d8

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
<<<<<<< HEAD
      plugins: [
        react(),
        tailwindcss(),
      ],

=======
      plugins: [react()],
>>>>>>> ef8a07290aec01352aa31111ed0ecd1bc34923d8
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
