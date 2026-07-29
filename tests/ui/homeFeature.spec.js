
import { test, expect } from '@playwright/test';

import { HomePage } from '../../pageObject/homePage.js';


// import { readData } from '../utils/dataRead.js';
// const data = readData('../testData/data.json');

import data from '../../testData/data.json' assert { type: 'json' };

test('Testid_001: Verify Home Page Title', async ({ page }) => {

    await page.goto(data.homePageUrl);
    await expect(page).toHaveTitle(data.homePageTitle);
})

test('Testid_002: Verify  Logo', async ({ page }) => {
    await page.goto(data.homePageUrl);
    const homePage = new HomePage(page);
    await expect(await homePage.verifyLogo()).toBeTruthy();
})

test('Testid_003: Verify Home header Components', async ({ page }) => {

    await page.goto(data.homePageUrl);
    const homePage = new HomePage(page);
    await expect(await homePage.verifyHeaderComponents(data.headerComponents)).toBeTruthy();
})