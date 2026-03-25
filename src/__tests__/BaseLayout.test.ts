import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import BaseLayout from "../layouts/BaseLayout.astro";

describe("BaseLayout", () => {
	it("renders without error", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(BaseLayout, {
			props: { title: "Test", description: "Test description" },
		});
		expect(result).toBeTruthy();
	});

	it("contains the page title", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(BaseLayout, {
			props: { title: "My Page", description: "Test description" },
		});
		expect(result).toContain("My Page");
	});

	it("contains Codex Foundation in title", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(BaseLayout, {
			props: { title: "Test", description: "Test description" },
		});
		expect(result).toContain("Codex Foundation");
	});

	it("contains the description", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(BaseLayout, {
			props: { title: "Test", description: "My custom description here" },
		});
		expect(result).toContain("My custom description here");
	});

	it("contains nav element", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(BaseLayout, {
			props: { title: "Test", description: "Test description" },
		});
		expect(result).toContain("<nav");
	});

	it("contains footer element", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(BaseLayout, {
			props: { title: "Test", description: "Test description" },
		});
		expect(result).toContain("<footer");
	});
});
