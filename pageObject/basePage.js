export class BasePage {
    constructor(page) {
        this.page = page;
    }

    clickElement(locator) {
        this.page.waitForLoadState('networkidle');
        return locator.click();
    }

    isElementVisible(locator) {
        return locator.isVisible();
    }

    enterText(locator, text) {
        return locator.fill(text);
    }

    getElementText(locator) {
        return locator.textContent();
    }


    selectOption(locator, option) {
        return locator.selectOption(option);
    }







}

