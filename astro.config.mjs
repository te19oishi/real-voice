// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@': '/src',
                '@utils': '/src/utils',
                '@images': '/src/posts/images',
            }
        }
    }
});
