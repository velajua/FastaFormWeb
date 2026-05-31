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
  assert.match(html, /SurveyCTO Basic/);
  assert.match(html, /225\/month/);
  assert.match(html, /5,000 monthly submissions/i);
  assert.doesNotMatch(html, /closest field-data platform comparison/i);
  assert.match(html, /screenshots\/1\.jpeg/);
  assert.match(html, /assets\/web-overview-card\.png/);
  assert.doesNotMatch(html, /assets\/play-feature-graphic\.png/);
  assert.match(html, /privacy\//);
  assert.doesNotMatch(html, /href="\/(?!\/)/, "internal links must be relative for /FastaFormWeb/");
  assert.doesNotMatch(html, /src="\/(?!\/)/, "asset links must be relative for /FastaFormWeb/");

  const script = await readSiteFile("script.js");
  assert.match(script, /formsInput/);
  assert.match(script, /"input"/);
  assert.match(script, /"change"/);
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
    "assets/web-overview-card.png",
    "screenshots/1.jpeg",
    "screenshots/5.jpeg",
    "screenshots/10.jpeg"
  ]) {
    assert.ok(existsSync(join(root, path)), `${path} should exist`);
  }
});

test("web overview card is desktop-resolution", async () => {
  const bytes = await readFile(join(root, "assets/web-overview-card.png"));
  const signature = bytes.subarray(0, 8).toString("hex");
  assert.equal(signature, "89504e470d0a1a0a", "overview card should be a PNG");

  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  assert.equal(width, 1357);
  assert.equal(height, 745);
});

test("calculator estimates costs from users and form counts", async () => {
  const { estimateFastaFormCost, estimateSubscriptionCost } = await import("../pricing.js");

  assert.equal(estimateFastaFormCost({ users: 12, forms: 3 }), 20);
  assert.equal(estimateFastaFormCost({ users: 12, forms: 4 }), 40);
  assert.equal(estimateFastaFormCost({ users: 2, forms: 7 }), 60);

  assert.equal(
    estimateSubscriptionCost({ users: 4, forms: 1, months: 12, flatMonthlyPrice: 59, includedUsers: 3 }),
    1416
  );
  assert.equal(
    estimateSubscriptionCost({ users: 12, forms: 3, months: 12, flatMonthlyPrice: 225, includedForms: 100 }),
    2700
  );
  assert.equal(
    estimateSubscriptionCost({ users: 12, forms: 1, months: 12, flatMonthlyPrice: 39, includedUsers: 1 }),
    5616
  );
  assert.equal(
    estimateSubscriptionCost({ users: 1, forms: 51, months: 12, flatMonthlyPrice: 39, includedUsers: 1, includedForms: 50 }),
    936
  );
});
