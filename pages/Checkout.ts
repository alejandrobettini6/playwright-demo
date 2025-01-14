import { Page } from "@playwright/test";

export class Checkout{
    private page: Page;
    private placeOrder: any;
    private nameOnCard: any;
    private cardNumber: any;
    private cvc: any;
    private expiryMonth: any;
    private expiryYear: any;
    private submit: any;
    public orderPlaced: any;

    constructor(page: Page){
        this.page = page;

        //Locators
        this.placeOrder = page.locator('a.btn.btn-default.check_out')
        this.nameOnCard = page.getByTestId('name-on-card');
        this.cardNumber = page.getByTestId('card-number');
        this.cvc = page.getByTestId('cvc');
        this.expiryMonth = page.getByTestId('expiry-month');
        this.expiryYear = page.getByTestId('expiry-year');
        this.submit = page.locator('#submit');
        this.orderPlaced = page.locator('//p[text()="Congratulations! Your order has been confirmed!"]');
    }

    async completeOrderPlace(paymentData: any){
        await this.placeOrder.click()
        await this.nameOnCard.fill(paymentData.name);
        await this.cardNumber.fill(paymentData.validCardNumber);
        await this.cvc.fill(paymentData.cvc);
        await this.expiryMonth.fill(paymentData.expiryMonth);
        await this.expiryYear.fill(paymentData.expiryYear);
        await this.submit.click();
        
    }

}