import { test as base } from '@playwright/test';
import { Home } from '../pages/Home';
import { Plp } from '../pages/Plp';
import { Pdp } from '../pages/Pdp';
import { Cart } from '../pages/Cart';
import { Login } from '../pages/Login';
import { Checkout } from '../pages/Checkout';
import fs from 'fs';
import yaml from 'js-yaml';

type PageObjects = {
  home: Home;
  plp: Plp;
  pdp: Pdp;
  cart: Cart;
  login: Login;
  checkout: Checkout;
  paymentData: any;
};

// Extender el test de Playwright con nuestros page objects
export const test = base.extend<PageObjects>({
  home: async ({ page }, use) => {
    await use(new Home(page));
  },
  plp: async ({ page }, use) => {
    await use(new Plp(page));
  },
  pdp: async ({ page }, use) => {
    await use(new Pdp(page));
  },
  cart: async ({ page }, use) => {
    await use(new Cart(page));
  },
  login: async ({ page }, use) => {
    await use(new Login(page));
  },
  checkout: async ({ page }, use) => {
    await use(new Checkout(page));
  },
  paymentData: async ({}, use) => {
    const data = yaml.load(fs.readFileSync('test-data/payment.yaml', 'utf8'));
    await use(data);
  }
});

export { expect } from '@playwright/test';