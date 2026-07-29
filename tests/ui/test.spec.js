import { test, expect } from '@playwright/test';

test('Verify Radio Button Selection', async ({ page }) => {

    let url = 'https://vivtechguru.com/practice.html';
    await page.goto(url);

    await page.locator("#flexRadioDefault1").click();

    await expect(page.locator("#flexRadioDefault1")).toBeChecked();

    await page.locator("#flexRadioDefault2").click();

    await expect(page.locator("#flexRadioDefault2")).toBeChecked();


});

test('Verify Checkbox button Selection', async ({ page }) => {

    let url = 'https://vivtechguru.com/practice.html';
    await page.goto(url);
    let Checkbox1 = page.locator("#flexCheck");
    let Checkbox2 = page.locator("#flexCheckChecked");
    await Checkbox1.click();

    await expect(Checkbox1).toBeChecked();

    await Checkbox2.click();

    await expect(Checkbox2).toBeChecked();


});
test('Verify Dropdown Selection', async ({ page }) => {

    let url = 'https://vivtechguru.com/practice.html';
    await page.goto(url);

    await page.selectOption("//select", "Option 2");

    await expect(page.locator("//select")).toHaveValue("option2");

    await page.pause();

});

test('verify Textbox Input', async ({ page }) => {

    let url = 'https://vivtechguru.com/practice.html';
    await page.goto(url);
    let textbox = page.getByPlaceholder('Enter data');
    await textbox.fill("Hello, World!");
    await expect(textbox).toHaveValue("Hello, World!");


});
test('Verify Autocomplete Textbox', async ({ page }) => {

    let url = 'https://vivtechguru.com/practice.html';
    await page.goto(url);

    let autocompleteTextbox = page.getByPlaceholder('Enter Here');
    await autocompleteTextbox.fill("C++");
    await page.waitForTimeout(2000);
    await page.getByText("C++").click();
    await expect(autocompleteTextbox).toHaveValue("C++");

});

test('Verify Alert', async ({ page }) => {

    let url = 'https://vivtechguru.com/practice.html';

    await page.goto(url);


    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
    });
    // let textbox = page.getByPlaceholder('Enter data');
    // await textbox.fill("Hello, World!");

    await page.locator("[onclick='showConfirm()']").click()

    await page.locator("#flexRadioDefault1").click();


});

test('Verify New Window', async ({ page, context }) => {

    let url = 'https://vivtechguru.com/practice.html';

    await page.goto(url);

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("[onclick='openNewWindow()']").click()
    ]);

    await newPage.getByPlaceholder('Enter your name').fill("Hello, World!");

    await expect(newPage.getByPlaceholder('Enter your name')).toHaveValue("Hello, World!");
    await newPage.pause()
    await newPage.close();
    await page.selectOption("//select", "Option 2");


});

test('Verify blnking of Textbox', async ({ page }) => {

    let url = 'https://vivtechguru.com/practice.html';
    await page.goto(url);
    await page.locator('.blinkingText')

    let value = await page.locator('.blinkingText').getAttribute('style');

    await expect(value).toContain(' blink 1s linear infinite !important;Pardeep Kumar');
    console.log(value);

    await page.screenshot({ path: 'C://Test\\MCP2\\screenshot.png', fullPage: true });


});

test('Verify Scrollbar functionality', async ({ page }) => {

    let url = 'https://vivtechguru.com/practice.html';
    await page.goto(url);

    await page.locator('.table1-container').evaluate((el) => {
        el.scrollTop = el.scrollHeight;
    });

    // await page.evaluate(() => {
    //     window.scrollTo(0, document.body.scrollHeight);
    // });

    // await page.evaluate(() => {
    //     window.scrollTo(500, 0);
    // });

    // let btn = await page.locator("[onclick='openLoginModal()']").scrollIntoViewIfNeeded();
    // expect(await btn.isVisible()).toBeTruthy();

    // //Verify Scrollbar functionality
    // await page.locator("[onclick='openLoginModal()']").click();

    //Horizontal Scrollbar






});

test('Frame Handling', async ({ page }) => {

    let url = 'https://vivtechguru.com/practice.html';
    await page.goto(url);


    let frame = page.frameLocator('[title="Iframe Example"]');
    await frame.locator('(//*[@class="button home_button"]/a)[1]').click();
    await frame.locator('(//*[@class="button home_button"]/a)[1]').click();

    await page.pause();


});

test('Mouse Hover and Keyboard operation ', async ({ page }) => {

    let url = 'https://vivtechguru.com/practice.html';
    await page.goto(url);

    await page.locator("//button[text()='Hover Effect']").hover();

    //Right click on the button
    // await page.locator("//button[text()='Hover Effect']").click({ button: 'right' });

    await page.locator("//button[text()='Hover Effect']").dblclick();

    // await page.locator("[onclick='openLoginModal()']").click();

    // await page.locator("#first").click();

    // await page.keyboard.type("Hello, World!");

    // await page.locator("#first").press('Control+A');

    // await page.keyboard.press('Control+C');


    // await page.locator('#password').nth(0).click();

    // await page.locator('#password').nth(0).press('Control+V');



    await page.pause();


});


test('Diffrent ways of wait in Playwright', async ({ page }) => {

    let url = 'https://vivtechguru.com/practice.html';
    await page.goto(url);

    await page.waitForEvent('load');

    await page.waitForTimeout(2000);

    await page.waitForSelector("//button[text()='Hover Effect']");




    await page.waitForLoadState('networkidle');



});

test('file Upload', async ({ page }) => {

    let url = 'https://www.google.com/';
    await page.goto(url);

    await page.locator("//*[@aria-label='Search by image']").click();

    //await page.locator("//span[text()='upload a file  ']").click();
    // setInputFiles("C:\\Test\\MCP2\\test.png");

    //   const fileChooser = await fileChooserPromise;

    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator("//span[text()='upload a file  ']").click()
    ]);

    await fileChooser.setFiles("C:\\Test\\MCP2\\test.png");



    await page.pause();


});
