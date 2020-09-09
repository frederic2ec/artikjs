import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';

export default [
  // browser-friendly UMD build
  {
    input: "src/index.ts",
    output: [
      {
        name: "pg",
        file: "dist/artik.js",
        format: "umd",
      },
      {
        name: "pg",
        file: "dist/artik.min.js",
        plugins: [terser()],
        format: "umd",
      },
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      typescript(), //so rollup can compile the TypeScript
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/index.ts",
    external: ["ms"],
    output: [
      { file: "dist/artik.cjs.js", format: "cjs" },
      { file: "dist/artik.esm.js", format: "es" },
    ],
    plugins: [
      typescript(),
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
  },
];
