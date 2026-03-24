import { describe, it, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Footer from '../components/Footer.astro';

describe('Footer', () => {
  it('renders without error', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);
    expect(result).toBeTruthy();
  });

  it('contains Codex Foundation text', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);
    expect(result).toContain('Codex Foundation');
  });

  it('contains Built in Italy text', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);
    expect(result).toContain('Built in Italy');
  });

  it('contains GitHub link', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);
    expect(result).toContain('github.com/codex-foundation');
  });

  it('contains Foundation section', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);
    expect(result).toContain('Foundation');
  });

  it('contains Community section', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);
    expect(result).toContain('Community');
  });

  it('contains Legal section', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);
    expect(result).toContain('Legal');
  });

  it('contains tagline', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);
    expect(result).toContain('Neutral infrastructure');
  });
});
