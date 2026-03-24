import { describe, it, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Index from '../pages/index.astro';

describe('Index page', () => {
  it('renders without error', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Index);
    expect(result).toBeTruthy();
  });

  it('contains CODEX hero text', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Index);
    expect(result).toContain('CODEX');
  });

  it('contains Infrastructure pillar', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Index);
    expect(result).toContain('Infrastructure');
  });

  it('contains Governance pillar', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Index);
    expect(result).toContain('Governance');
  });

  it('contains Community pillar', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Index);
    expect(result).toContain('Community');
  });

  it('contains neutral ground tagline', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Index);
    expect(result).toContain('NEUTRAL GROUND FOR OPEN SOURCE');
  });

  it('contains Explore Projects CTA', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Index);
    expect(result).toContain('Explore Projects');
  });

  it('contains Building in the open CTA', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Index);
    expect(result).toContain('Building in the open');
  });
});
