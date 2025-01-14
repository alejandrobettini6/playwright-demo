import { Page } from '@playwright/test';

export class Home {

    private page: Page; 
    products: any;

    constructor(page: Page){
        this.page = page;

        //Locators
        this.products = page.getByRole('link', { name: 'Products' });
    }

    async goToProducts() {
        await this.products.click();
    }
}