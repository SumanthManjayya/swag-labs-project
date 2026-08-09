const playwrightBdd = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { InventoryPage } = require('../pages/inventory.page');
const { CartPage } = require('../pages/cart.page');
const { CheckoutInfoPage } = require('../pages/checkout-info.page');
const { CheckoutOverviewPage } = require('../pages/checkout-overview.page');
const { CheckoutCompletePage } = require('../pages/checkout-complete.page');
const { users } = require('../data/users');

/**
 * Custom fixtures expose Page Objects to BDD step definitions.
 * createBdd(test) binds Given / When / Then to this extended test instance.
 */
const test = playwrightBdd.test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutInfoPage: async ({ page }, use) => {
    await use(new CheckoutInfoPage(page));
  },

  checkoutOverviewPage: async ({ page }, use) => {
    await use(new CheckoutOverviewPage(page));
  },

  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },

  /** Pre-authenticated inventory session for cart/checkout scenarios */
  loggedInInventoryPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.isLoaded();

    await use(inventoryPage);
  },
});

const { Given, When, Then } = playwrightBdd.createBdd(test);

module.exports = { test, expect, Given, When, Then };
