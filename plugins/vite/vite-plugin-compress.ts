import { mkdirSync, statSync } from "fs";
import { type PluginOption } from "vite";
import { Packer } from "roadroller";
import { zip } from "zip-a-folder";

export const checkBuildSize = () => {
	const stats = statSync("./dist/game.zip");
	const used = Math.min(10, Math.ceil((stats.size / 13312) * 10));
	const bar = "🟥".repeat(used) + "🟩".repeat(10 - used);
	console.log(`${bar} ${(stats.size / 1024).toFixed(2)} KiB / 13 KiB`);
};

const vitePluginCompress = (O = 1): PluginOption => {
	return {
		name: "vite-plugin-roadroller",
		enforce: "post",
		apply: "build",
		generateBundle: async (_, bundle) => {
			const script = bundle["assets/index.js"];

			if (script !== undefined && script.type === "chunk") {
				const packer = new Packer(
					[
						{
							data: script.code,
							type: "js",
							action: "eval",
						},
					],
					{}
				);
				for (let i = 0; i < O; i++) {
					await packer.optimize();
				}
				const { firstLine, secondLine } = packer.makeDecoder();

				script.code = firstLine + secondLine;
			}
		},
		closeBundle: async () => {
			try {
				mkdirSync("./dist");
				// eslint-disable-next-line no-empty
			} catch {}
			await zip("./build", "./dist/game.zip", {
				compression: 9,
			});

			checkBuildSize();
		},
	};
};

export default vitePluginCompress;
