import { Page } from '@playwright/test';

export class Plp {

    private page: Page;
    private viewProducts: any;

    constructor(page: Page) {
        this.page = page;

        //Locators
        this.viewProducts = page.locator(".fa-plus-square")
    }

    async viewProductDetail(index: number) {
        await this.viewProducts.nth(index).click();
    }


}