const { defineConfig, devices } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: ['fixtures/test-fixtures.js', 'steps/**/*.js'],
});

const browser = process.env.BROWSER || 'chromium';

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
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
    {
      name: 'msedge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
      },
    },
  ],

  grep: undefined,
});