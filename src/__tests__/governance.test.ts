import { describe, it, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Governance from '../pages/governance.astro';

describe('Governance page', () => {
  it('renders without error', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Governance);
    expect(result).toBeTruthy();
  });

  it('contains Governance heading', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Governance);
    expect(result).toContain('Governance');
  });

  it('contains Neutrality principle', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Governance);
    expect(result).toContain('Neutrality');
  });

  it('contains Transparency principle', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Governance);
    expect(result).toContain('Transparency');
  });

  it('contains Meritocracy principle', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Governance);
    expect(result).toContain('Meritocracy');
  });

  it('contains Sustainability principle', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Governance);
    expect(result).toContain('Sustainability');
  });

  it('contains Board of Directors', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Governance);
    expect(result).toContain('Board of Directors');
  });

  it('contains Technical Committee', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Governance);
    expect(result).toContain('Technical Committee');
  });
});
