import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const REVIEW_DIR = "/Users/tyasiglesias/Desktop/NAP LANDING PAG/.impeccable/review";
mkdirSync(REVIEW_DIR, { recursive: true });

const URL = process.env.URL || "http://127.0.0.1:4321/";

const viewports = [
  { name: "desktop", width: 1440, height: 900, dpr: 2 },
  { name: "mobile", width: 390, height: 844, dpr: 3 },
];

const browser = await chromium.launch({ headless: true });

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: vp.dpr,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();

  // Disable animations for stable screenshots
  await page.addInitScript(() => {
    const css = `*, *::before, *::after { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }`;
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.documentElement.appendChild(style);
  });

  await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });

  // Wait for fonts + images
  await page.evaluate(() => document.fonts.ready);
  await page.waitForLoadState("networkidle");

  // Settle a tick
  await page.waitForTimeout(800);

  // Scroll through page to trigger any IntersectionObserver reveals
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const step = Math.floor(vp.height * 0.8);
  for (let y = 0; y < height; y += step) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(120);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);

  const out = resolve(REVIEW_DIR, `${vp.name}.png`);
  await page.screenshot({ path: out, fullPage: true, type: "png" });
  console.log(`[ok] ${vp.name} -> ${out}`);

  await context.close();
}

await browser.close();
console.log("done");