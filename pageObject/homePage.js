import { BasePage } from './basePage.js';


export class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.logo = page.locator('.logo_img > img').nth(0);
        this.headerComponents = page.locator('.main_nav >li>a');
    }

    async verifyLogo() {
        return await this.isElementVisible(this.logo);
    }
    async verifyHeaderComponents(headerComponents) {
        // Implement logic to verify header components
        for (const component of headerComponents) {
            const locator = this.page.locator(`.main_nav >li>a:has-text("${component}")`);
            if (!await this.isElementVisible(locator)) {
                return false;
            }
        }
        return true;

    }

}

