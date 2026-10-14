// Validate the HTML delivered to crawlers, without relying on client-side JavaScript.
const assert = require('node:assert/strict');
const base = process.argv[2] || 'http://127.0.0.1:4174';
const origin = 'https://cabanasmirsu.vercel.app';
const routes = ['/', '/cabana', '/cabanas/externa', '/cabanas/interior'];

async function check() {
  const titles = new Set();
  const descriptions = new Set();
  for (const route of routes) {
    const response = await fetch(`${base}${route}`);
    assert.equal(response.status, 200, route);
    assert(!/noindex/i.test(response.headers.get('x-robots-tag') || ''), route);
    const html = await response.text();
    const head = html.match(/<head>([\s\S]*?)<\/head>/)[1];
    const tags = [...head.matchAll(/<meta\s[^>]+>/g)].map(([tag]) => Object.fromEntries(
      [...tag.matchAll(/([\w:]+)="([^"]*)"/g)].map(([, name, value]) => [name, value])
    ));
    const meta = name => {
      const matching = tags.filter(tag => tag.name === name || tag.property === name);
      assert.equal(matching.length, 1, `${route}: ${name} must occur once`);
      return matching[0].content;
    };
    const title = head.match(/<title>(.*?)<\/title>/)[1];
    const description = meta('description');
    assert(!titles.has(title), 'Duplicate title');
    assert(!descriptions.has(description), 'Duplicate description');
    titles.add(title);
    descriptions.add(description);
    assert.equal((head.match(/rel="canonical"/g) || []).length, 1);
    assert(head.includes(`rel="canonical" href="${origin}${route}"`));
    assert.equal(meta('og:url'), `${origin}${route}`);
    assert.equal(meta('og:title'), title);
    assert.equal(meta('og:description'), description);
    assert.equal(meta('og:image'), `${origin}/img/mirsu-compartir-v1.jpg`);
    assert.equal(meta('og:image:width'), '1200');
    assert.equal(meta('og:image:height'), '630');
    assert.equal(meta('og:image:type'), 'image/jpeg');
    assert.equal(meta('twitter:card'), 'summary_large_image');
    assert.equal(meta('twitter:image'), meta('og:image'));
    assert(!meta('robots').includes('noindex'));
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    const schema = JSON.parse(head.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1]);
    assert.equal(schema['@type'], route === '/' ? 'LodgingBusiness' : 'BreadcrumbList');
    console.log(`OK ${route}: canonical, metadata, social card, H1, JSON-LD`);
  }
  const robots = await fetch(`${base}/robots.txt`);
  assert.equal(robots.status, 200);
  assert((await robots.text()).includes(`Sitemap: ${origin}/sitemap.xml`));
  const sitemap = await fetch(`${base}/sitemap.xml`);
  assert.equal(sitemap.status, 200);
  const locations = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url);
  assert.deepEqual(locations.sort(), routes.map(route => origin + route).sort());
  const image = await fetch(`${base}/img/mirsu-compartir-v1.jpg`);
  assert.equal(image.status, 200);
  assert(image.headers.get('content-type').includes('image/jpeg'));
  const bytes = Buffer.from(await image.arrayBuffer());
  assert.equal(bytes.readUInt16BE(0), 0xffd8);
  assert(bytes.length < 300 * 1024, 'Keep the social card below 300 KB');
  let dimensions;
  for (let offset = 2; offset < bytes.length;) {
    const marker = bytes.readUInt16BE(offset);
    const length = bytes.readUInt16BE(offset + 2);
    if ([0xffc0, 0xffc1, 0xffc2].includes(marker)) {
      dimensions = [bytes.readUInt16BE(offset + 7), bytes.readUInt16BE(offset + 5)];
      break;
    }
    offset += 2 + length;
  }
  assert.deepEqual(dimensions, [1200, 630]);
  const redirect = await fetch(`${base}/turismo`, { redirect: 'manual' });
  assert([301, 308].includes(redirect.status));
  assert.equal(redirect.headers.get('location'), '/#ubicacion');
  assert.equal((await fetch(`${base}/cabanas/no-existe`)).status, 404);
  console.log('OK robots, sitemap, JPEG dimensions/size, permanent redirect, 404');
}

check().catch(error => { console.error(error); process.exitCode = 1; });
