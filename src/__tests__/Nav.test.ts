import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import Nav from "../components/Nav.astro";

describe("Nav", () => {
	it("renders without error", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Nav);
		expect(result).toBeTruthy();
	});

	it("contains logo image", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Nav);
		expect(result).toContain("codex-logo-horizontal-dark.svg");
	});

	it("contains logo alt text", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Nav);
		expect(result).toContain("Codex Foundation");
	});

	it("contains Home link", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Nav);
		expect(result).toContain("Home");
	});

	it("contains About link", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Nav);
		expect(result).toContain("About");
	});

	it("contains Projects link", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Nav);
		expect(result).toContain("Projects");
	});

	it("contains Governance link", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Nav);
		expect(result).toContain("Governance");
	});

	it("contains Community link", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Nav);
		expect(result).toContain("Community");
	});

	it("contains Contact link", async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(Nav);
		expect(result).toContain("Contact");
	});
});
