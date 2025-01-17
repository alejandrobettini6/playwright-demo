import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['list']],
  timeout: 120000,
  globalTimeout: 120000,
  expect: {
    timeout: 5000
  },
  use: {
    //NOTE: This is to use the data-qa attribute in the locators
    testIdAttribute: 'data-qa',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://automationexercise.com/',
    
  },

  projects: [
    {
      name: 'Desktop Chrome',
      testMatch: ['**/*.spec.ts'],  // Esto incluye todos los tests
      testIgnore: '**/tests/performance.spec.ts',  // Excluye solo las pruebas de performance
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'Mobile iOS',
      testMatch: ['**/*.spec.ts'],  // Esto incluye todos los tests
      testIgnore: '**/tests/performance.spec.ts',  // Excluye solo las pruebas de performance
      use: { ...devices['iPhone 14 Pro'] }
    },
    {
      name: 'performance',
      testMatch: ['**/tests/performance.spec.ts'],  // Solo las pruebas de performance
      use: { 
        ...devices['Desktop Chrome']
      }
    }

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
