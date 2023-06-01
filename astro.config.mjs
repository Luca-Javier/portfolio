import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
	site: "https://luca-javier.github.io",
	//compressHTML: true,
	build: {
		assetsPrefix: "https://luca-javier.github.io/portfolio",
	},
	/* server: {
		host: true,
	}, */
})
