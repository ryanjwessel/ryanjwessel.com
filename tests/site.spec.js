import { test, expect } from '@playwright/test';

const routes = ['/', '/about', '/work', '/writing', '/work/intelligence-delivery', '/work/mobile-architecture'];

for (const route of routes) {
  test(`${route} renders correctly`, async ({ page, baseURL }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => {
      if (response.url().startsWith(baseURL) && response.status() >= 400) {
        errors.push(`${response.status()} ${response.url()}`);
      }
    });
    page.on('requestfailed', request => {
      if (request.url().startsWith(baseURL)) errors.push(`Failed: ${request.url()}`);
    });
    // Stable fallback fonts keep comparisons independent of Google's availability.
    await page.route('https://fonts.googleapis.com/**', request => request.abort());
    await page.route('https://fonts.gstatic.com/**', request => request.abort());
    const response = await page.goto(route);
    expect(response.status()).toBe(200);
    await expect(page).toHaveTitle(/Ryan Wessel/);
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    await expect.poll(() => page.locator('img').evaluateAll(images =>
      images.every(image => image.complete && image.naturalWidth > 0)
    )).toBe(true);
    expect(await page.evaluate(() =>
      document.documentElement.scrollWidth <= window.innerWidth + 1
    )).toBe(true);
    // Verify the stylesheet applied, not merely that HTML was returned.
    expect(await page.locator('body').evaluate(el => getComputedStyle(el).fontFamily)).toMatch(/Manrope/);
    expect(errors).toEqual([]);
    if (process.env.VISUAL_CHECK === '1') {
      await expect(page).toHaveScreenshot(`${route.replaceAll('/', '-') || 'home'}.png`, {
        fullPage: true,
        animations: 'disabled',
      });
    }
  });
}

test('navigation and home call to action work', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Explore my work' }).click();
  await expect(page).toHaveURL(/\/work\/?$/);
  await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'About', exact: true }).click();
  await expect(page).toHaveURL(/\/about\/?$/);
  await expect(page.locator('#experience')).toBeVisible();
  await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Writing', exact: true }).click();
  await expect(page).toHaveURL(/\/writing\/?$/);
});
