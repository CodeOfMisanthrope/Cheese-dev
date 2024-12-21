import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import terser from "@rollup/plugin-terser";
import del from "rollup-plugin-delete";

import pkg from "./package.json" with { type: "json" };

const config = {
	input: "src/lib/index.ts",
	output: [
		{
			file: pkg.main,
			name: pkg.name,
			format: "cjs",
			sourcemap: true,
		},
		{
			file: pkg.browser,
			name: pkg.name,
			format: 'umd',
			sourcemap: true,
		},
		{
			file: pkg.module,
			name: pkg.name,
			format: "esm",
			sourcemap: true,
		}
	],
	plugins: [
		del({ targets: "dist/*" }),
		commonjs(),
		terser(),
		typescript({
			tsconfig: "./tsconfig.json",
			exclude: [
				"src/index.ts",
				"src/esbuild-api.ts",
				"src/lib/core/**/*.spec.ts",
				"src/lib/core/**/spec.ts",
			],
		}),
		alias({
			entries: [
				{ find: "~lib", replacement: "src/lib" },
				{ find: "~core", replacement: "src/lib/core" },
				{ find: "~assets", replacement: "assets" },
			],
		}),
	],
};

export default config;
