import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import vitePluginCompress from "./plugins/vite/vite-plugin-compress";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
	plugins: [
		cssInjectedByJsPlugin(),
		// optimize: 1 time
		vitePluginCompress(1),
		// minify index.html in production
		ViteMinifyPlugin(),
		// comment code below if you don't want single index.html file
		viteSingleFile(),
	],
	base: "./",
	build: {
		outDir: "./build",
		polyfillModulePreload: false,
		rollupOptions: {
			output: {
				entryFileNames: "assets/[name].js",
				chunkFileNames: "assets/[name].js",
				assetFileNames: "assets/[name].[ext]",
			},
		},
		minify: "terser",
		terserOptions: {
			compress: {
				defaults: true,
				dead_code: true,
				// remove `__defProp`, `Object.defineProperty`, `__defNormalProp`, `__publicField`
				pure_funcs: ["__defProp", "__defNormalProp", "__publicField"],
				pure_getters: true,
			},
			mangle: {
				properties: {
					builtins: false,
					keep_quoted: true,
					regex: /^_/, // mangle all properties start with underscore
				},
				module: true,
				keep_classnames: false,
				keep_fnames: false,
			},
		},
	},
});
