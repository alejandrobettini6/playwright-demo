import { Page } from '@playwright/test';

export class Login {
    private page: Page;

    private newUserName: any;
    private emailAddress: any;
    private signUp: any;
    private newPassword: any;
    private days: any;
    private months: any;
    private years: any;
    private firstName: any;
    private lastName: any;
    private company: any;
    private address: any;
    private country: any;
    private state: any;
    private city: any;
    private zipcode: any;
    private mobileNumber: any;
    private createAccount: any;
    public accountCreated: any;   
    private continue: any;
    private logoutButton: any;


    constructor(page: Page) {
        this.page = page;

        //Locators
        this.newUserName = page.getByTestId('signup-name')
        this.emailAddress = page.getByTestId('signup-email')
        this.signUp = page.getByTestId('signup-button')
        this.newPassword = page.getByTestId('password')
        this.days = page.locator('#days')
        this.months = page.locator('#months')
        this.years = page.locator('#years')
        this.firstName = page.locator('#first_name')
        this.lastName = page.locator('#last_name')
        this.company = page.locator('#company')
        this.address = page.getByTestId('address')
        this.country = page.getByTestId('country')
        this.state = page.getByTestId('state')
        this.city = page.getByTestId('city')
        this.zipcode = page.getByTestId('zipcode')
        this.mobileNumber = page.getByTestId('mobile_number')
        this.createAccount = page.getByTestId('create-account')
        this.accountCreated = page.getByTestId('account-created')
        this.continue = page.getByTestId('continue-button')
        this.logoutButton = page.locator('a[href="/logout"]')
    }

    async createNewUser(name, email){
        await this.newUserName.fill(name)
        await this.emailAddress.fill(email)
        await this.signUp.click()
    }

    async completeSignUpForm(userData){
        await this.newPassword.fill(userData.password)
        await this.days.selectOption(userData.day)
        await this.months.selectOption(userData.month)
        await this.years.selectOption(userData.year)
        await this.firstName.fill(userData.fullName.split(' ')[0])
        await this.lastName.fill(userData.fullName.split(' ')[1])
        await this.address.fill(userData.address)
        await this.company.fill(userData.company)
        await this.country.selectOption(userData.country)
        await this.state.fill(userData.state)
        await this.city.fill(userData.city)
        await this.zipcode.fill(userData.zipcode)
        await this.mobileNumber.fill(userData.mobileNumber)
        await this.createAccount.click()
    }

    async continueToHome(){
        await this.continue.click()
    }

    async logout(){
        await this.logoutButton.click()
    }
}