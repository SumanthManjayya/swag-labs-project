const { defineConfig, devices } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');

/**
 * BDD + POM framework config
 * - features/  → Gherkin scenarios (BDD)
 * - steps/     → step definitions (glue code)
 * - pages/     → Page Object Model
 * - fixtures/  → Playwright fixtures wiring POM into BDD steps
 */
const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: ['fixtures/test-fixtures.js', 'steps/**/*.js'],
});

module.exports = defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html', open: 'never' }],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'] },
    },
  ],
});
