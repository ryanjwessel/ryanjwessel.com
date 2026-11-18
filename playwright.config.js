import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 2,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'outputs/playwright-report' }]],
  outputDir: 'outputs/test-results',
  snapshotPathTemplate: 'outputs/reference/{projectName}/{arg}{ext}',
  expect: { toHaveScreenshot: { maxDiffPixelRatio: 0.001 } },
  use: {
    baseURL: process.env.TEST_BASE_URL || 'http://127.0.0.1:4321',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
  ],
  webServer: {
    command: process.env.BASELINE_DIR
      ? `npm --prefix ${process.env.BASELINE_DIR} run preview -- --host 127.0.0.1 --port 4322`
      : 'npm run preview -- --host 127.0.0.1 --port 4321',
    url: process.env.TEST_BASE_URL || 'http://127.0.0.1:4321',
    reuseExistingServer: false,
  },
});
