// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  // retries: 2,
  //Wait for the actionability of an element before performing action
  timeout: 30000,
  // testMatch: ["tests/test.spec.js"],
  // testMatch: ["tests/test.spec.js", "tests/test2.spec.js"],
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['list'], ['allure-playwright'], ['html']],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://vivtechguru.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    // screenshot: 'on-first-failure',
    headless: true,

  },


  /* Configure projects for major browsers */
  projects: [

    {
      name: 'API',
      testDir: './tests/api',
      testMatch: /.*api\/.*\.spec\.js/,

      use: {
        baseURL: 'https://api.restful-api.dev',
      },
    },
    {
      name: 'UI',
      testDir: './tests/ui',
      testMatch: /.*ui\/.*\.spec\.js/,
      use: {
        baseURL: 'https://vivtechguru.com',
        browserName: 'chromium',
      },
    },
    // {
    //   name: 'UI',
    //   testMatch: /.*ui\/.*\.spec\.js/
    // },
    // {
    //   name: 'API',
    //   testMatch: /.*api\/.*\.spec\.js/
    // }
    // {
    //   name: 'chromium',
    //   testDir: './tests',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

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
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

