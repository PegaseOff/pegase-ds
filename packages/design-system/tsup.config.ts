import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom'],
    minify: true,
    target: 'esnext',
    outDir: 'dist',
    esbuildOptions(options) {
        options.platform = 'node';
        return options;
    },
});