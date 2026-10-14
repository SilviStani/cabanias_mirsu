// Render the code-native card using an installed Chromium browser; no build dependency.
const { spawnSync } = require('node:child_process');
const { readFileSync, writeFileSync, mkdtempSync } = require('node:fs');
const { join, resolve } = require('node:path');
const { tmpdir } = require('node:os');
const { pathToFileURL } = require('node:url');

const browser = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const profile = mkdtempSync(join(tmpdir(), 'mirsu-social-'));
const result = spawnSync(browser, [
  '--headless', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--allow-file-access-from-files', `--user-data-dir=${profile}`,
  '--virtual-time-budget=3000', '--dump-dom',
  pathToFileURL(resolve(__dirname, '../design/social-card.html')).href,
], { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024, timeout: 30000, windowsHide: true });
if (result.error) throw result.error;
const encoded = result.stdout.match(/<pre id="export">data:image\/jpeg;base64,([^<]+)<\/pre>/);
if (result.status !== 0 || !encoded) {
  throw new Error(`Could not render social card: ${result.stderr}`);
}
const output = resolve(__dirname, '../public/img/mirsu-compartir-v1.jpg');
writeFileSync(output, Buffer.from(encoded[1], 'base64'));
console.log(`Social card: ${output} (${Math.round(readFileSync(output).length / 1024)} KB)`);
