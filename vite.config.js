import { defineConfig } from 'vite';
import { resolve } from 'path';
import htmlInject from 'vite-plugin-html-inject';

export default defineConfig({
    plugins: [
        inject(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contacts: resolve(__dirname, 'contacts.html'),
                doctors: resolve(__dirname, 'doctors.html'),
                services: resolve(__dirname, 'services.html'),
            },
        },
    },
});