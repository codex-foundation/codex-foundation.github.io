import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import Community from "../pages/community.astro";

describe("Community page", () => {
	it("renders without error", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Community);
		expect(result).toBeTruthy();
	});

	it("contains Community heading", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Community);
		expect(result).toContain("Community");
	});

	it("contains Contribute Code", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Community);
		expect(result).toContain("Contribute Code");
	});

	it("contains Improve Docs", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Community);
		expect(result).toContain("Improve Docs");
	});

	it("contains Mentor Others", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Community);
		expect(result).toContain("Mentor Others");
	});

	it("contains Support Financially", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Community);
		expect(result).toContain("Support Financially");
	});

	it("contains GitHub Discussions channel", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Community);
		expect(result).toContain("GitHub Discussions");
	});

	it("contains values banner", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Community);
		expect(result).toContain("harassment-free");
	});
});
