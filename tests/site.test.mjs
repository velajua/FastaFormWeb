import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import assert from "node:assert/strict";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

async function readSiteFile(path) {
  return readFile(join(root, path), "utf8");
}

test("landing page is a GitHub Pages-ready FastaForm marketing page", async () => {
  const html = await readSiteFile("index.html");

  assert.match(html, /<title>FastaForm/);
  assert.match(html, /https:\/\/play\.google\.com\/store\/apps\/details\?id=org\.fastaform\.app/);
  assert.match(html, /20 USD/);
  assert.match(html, /up to 3 forms/i);
  assert.match(html, /Offline mobile forms/i);
  assert.match(html, /screenshots\/1\.jpeg/);
  assert.match(html, /privacy\//);
  assert.doesNotMatch(html, /href="\/(?!\/)/, "internal links must be relative for /FastaFormWeb/");
  assert.doesNotMatch(html, /src="\/(?!\/)/, "asset links must be relative for /FastaFormWeb/");
});

test("privacy page preserves the current FastaForm policy content", async () => {
  const html = await readSiteFile("privacy/index.html");

  assert.match(html, /FastaForm Privacy Policy/);
  assert.match(html, /Effective date: May 30, 2026/);
  assert.match(html, /offline mobile form-entry application/);
  assert.match(html, /Google Play Billing/);
  assert.match(html, /\.\.\/index\.html/);
});

test("required static assets are present", () => {
  for (const path of [
    "assets/icon.png",
    "assets/play-feature-graphic.png",
    "screenshots/1.jpeg",
    "screenshots/5.jpeg",
    "screenshots/10.jpeg"
  ]) {
    assert.ok(existsSync(join(root, path)), `${path} should exist`);
  }
});
