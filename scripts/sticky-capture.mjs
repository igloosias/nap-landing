import { chromium } from "playwright";
import { resolve } from "node:path";

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 3,
  reducedMotion: "reduce",
});
const page = await context.newPage();
await page.addInitScript(() => {
  const css = `*, *::before, *::after { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }`;
  const style = document.createElement("style");
  style.appendChild(document.createTextNode(css));
  document.documentElement.appendChild(style);
});
await page.goto("http://127.0.0.1:4322/", { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => window.scrollTo(0, 1200));
await page.waitForTimeout(800);
const out = resolve("/Users/tyasiglesias/Desktop/NAP LANDING PAG/.impeccable/review/mobile-sticky.png");
await page.screenshot({ path: out, fullPage: false, type: "png" });
console.log("ok", out);
await browser.close();
