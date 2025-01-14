import { Page } from '@playwright/test';

export class Pdp {
    private page: Page
    private quantity: any;
    private addToCartButton: any;
    private viewCartLink: any

    constructor(page: Page) {
        this.page = page;

        //Locators
        this.quantity = page.locator("#quantity")
        this.addToCartButton = page.locator("button.cart")
        this.viewCartLink = page.locator('a').filter({ hasText: 'View Cart' });
    }

    async setQuantitySelector(quantity: string) {
        await this.quantity.fill(quantity);
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async viewCart() {
        await this.viewCartLink.click();
    }

}