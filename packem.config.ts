import { defineConfig } from '@visulima/packem/config';
import transformer from '@visulima/packem/transformer/esbuild';

export default defineConfig({
  declaration: false, // will be generated with the "build:types" script
  minify: true,
  transformer,
  sourcemap: true,
});
