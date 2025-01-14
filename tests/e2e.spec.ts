import { Home } from '../pages/Home';
import { Plp } from '../pages/Plp';
import { Pdp } from '../pages/Pdp';
import { Cart } from '../pages/Cart';
import { Login } from '../pages/Login';
import { test, expect} from '../fixtures/fixtures'
import  fs  from 'fs';
import yaml from 'js-yaml';
import { Checkout } from '../pages/Checkout';
const { getRandomInt, generateRandomUserData } = require('../utils/random');

test.describe('End to end test suite', () => {

  let paymentData;

  test.beforeEach(async ({ page }) => {
      //Precondition for each test case in this test suite: navigate to home page in the website without being logued in
      //and load payment data as we can share it in different tests, if any
      paymentData = yaml.load(await fs.readFileSync('test-data/payment.yaml', 'utf8'));
      await page.goto('/');
  });

  test('Checkout flow from scratch', async ({ page, home, plp, pdp, cart, login, checkout }) => {

    await home.goToProducts();
    await plp.viewProductDetail(2);
    await pdp.setQuantitySelector(getRandomInt(1, 20).toString());
    await pdp.addToCart();
    await pdp.viewCart();
    await cart.proceedToCheckout();
    await cart.registerLogin();

    //OPTIONAL STEPS
    let userData = generateRandomUserData();
    await login.createNewUser(userData.fullName, userData.email);
    await login.completeSignUpForm(userData);
    //Validate account created successfully but continue the test if fails
    await expect.soft(login.accountCreated).toBeVisible();
    await login.continueToHome();

    //NOTE: Moving foward steps and going directly to checkout to complete the order
    await page.goto('/checkout');
    
    await checkout.completeOrderPlace(paymentData);
    await expect.soft(checkout.orderPlaced).toBeVisible();
    await login.logout();

  });

});