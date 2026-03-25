import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import About from "../pages/about.astro";

describe("About page", () => {
	it("renders without error", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(About);
		expect(result).toBeTruthy();
	});

	it("contains About the Foundation heading", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(About);
		expect(result).toContain("About the Foundation");
	});

	it("contains mission text", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(About);
		expect(result).toContain("Mission");
	});

	it("contains Founded in Italy text", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(About);
		expect(result).toContain("Founded in Italy");
	});

	it("contains Vision section", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(About);
		expect(result).toContain("Vision");
	});

	it("contains Values section", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(About);
		expect(result).toContain("Values");
	});

	it("contains Neutrality value", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(About);
		expect(result).toContain("Neutrality");
	});

	it("contains Italian roots section", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(About);
		expect(result).toContain("Italy has a long tradition");
	});
});
