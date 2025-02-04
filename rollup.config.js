import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import { cleandir } from "rollup-plugin-cleandir";

export default {
  input: [
    'src/index.ts',
  ],
  output: [
    {
      dir: 'dist/',
      format: 'es',
      preserveModules: true,
    },
    {
      dir: 'dist/',
      format: 'commonjs',
      preserveModules: true,
    },
  ],
  external: [/node_modules/, /scripts\/.*/, /examples\/.*/],
  plugins: [
    cleandir('dist/'),
    commonjs(),
    nodeResolve({
      preferBuiltins: true,
      exportConditions: ['node'],
    }),
    typescript({
      clean: true,
      tsconfig: './tsconfig.build.json',
      include: 'src/**/*.ts',
      exclude: 'node_modules/**',
    }),
  ],
};
