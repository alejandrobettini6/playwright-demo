import { Page } from '@playwright/test';

export class Cart {
    private page: Page;

    private proceedToCheckoutButton: any;
    private registerLoginButton: any;

    constructor(page: Page) {
        this.page = page;

        //Locators
        this.proceedToCheckoutButton = page.locator("a.check_out");
        this.registerLoginButton = page.locator('a').filter({ hasText: 'Register / Login' });
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutButton.click();
    }

    async registerLogin() {
        await this.registerLoginButton.click();
    }

    
}
