import { getViteConfig } from "astro/config";

export default getViteConfig({
	test: {
		coverage: {
			provider: "v8",
			include: ["src/**/*.{astro,ts,js}"],
			thresholds: {
				lines: 100,
				functions: 100,
				branches: 100,
				statements: 100,
			},
		},
	},
});
