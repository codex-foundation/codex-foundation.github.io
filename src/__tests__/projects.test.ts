import { describe, it, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Projects from '../pages/projects.astro';

describe('Projects page', () => {
  it('renders without error', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Projects);
    expect(result).toBeTruthy();
  });

  it('contains Projects heading', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Projects);
    expect(result).toContain('Projects');
  });

  it('contains Codex CLI project', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Projects);
    expect(result).toContain('Codex CLI');
  });

  it('contains Meridian project', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Projects);
    expect(result).toContain('Meridian');
  });

  it('contains Portale project', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Projects);
    expect(result).toContain('Portale');
  });

  it('contains Archivio project', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Projects);
    expect(result).toContain('Archivio');
  });

  it('contains Rete project', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Projects);
    expect(result).toContain('Rete');
  });

  it('contains Fondamenta project', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Projects);
    expect(result).toContain('Fondamenta');
  });
});
