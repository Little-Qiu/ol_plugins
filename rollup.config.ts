/*
 * @Author: LittleQ
 * @Date: 2022-08-15 23:21:09
 * @LastEditTime: 2022-08-24 22:59:02
 * @LastEditors: LittleQ
 * @Description:
 * @FilePath: \ol_plugins\rollup.config.ts
 */

// import { defineConfig } from 'rollup'
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";

const currentNodeEnv = process.env.NODE_ENV;
const isCompressLibrary =
  currentNodeEnv === "prod" ? terser({ module: true, toplevel: true }) : null;
const pkg = require("./package.json");

const libraryName = "ol-plugins";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.main,
        name: libraryName,
        format: "umd",
        sourcemap: true,
      },
      { file: pkg.module, format: "es", sourcemap: true },
    ],
    external: ["ol"],
    globals: {
      ol: "ol",
    },
    plugins: [
      typescript({ compilerOptions: { lib: ["esnext"] } }),
      isCompressLibrary,
    ],
    watch: {
      include: "src/**",
      exclude: "node_modules/**",
    },
  },
  {
    input: "./src/index.ts",
    output: [{ file: `dist/${libraryName}.d.ts`, format: "esm" }],
    plugins: [dts()],
  },
];
