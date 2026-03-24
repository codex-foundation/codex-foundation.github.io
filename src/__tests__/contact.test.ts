import { describe, it, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Contact from '../pages/contact.astro';

describe('Contact page', () => {
  it('renders without error', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Contact);
    expect(result).toBeTruthy();
  });

  it('contains Contact heading', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Contact);
    expect(result).toContain('Contact');
  });

  it('contains form element', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Contact);
    expect(result).toContain('<form');
  });

  it('contains name field', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Contact);
    expect(result).toContain('name="name"');
  });

  it('contains email field', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Contact);
    expect(result).toContain('type="email"');
  });

  it('contains message textarea', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Contact);
    expect(result).toContain('<textarea');
  });

  it('contains GitHub link', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Contact);
    expect(result).toContain('github.com/codex-foundation');
  });

  it('contains email contact', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Contact);
    expect(result).toContain('contact@codex.foundation');
  });
});
