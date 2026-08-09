const { BasePage } = require('./base.page');

/**
 * Cart Page Object — locators and actions only.
 */
class CartPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.pageTitle = page.locator('.title');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    this.cartItems = page.locator('.cart_item');
    this.itemNames = page.locator('.inventory_item_name');
  }

  async isLoaded() {
    await this.page.waitForURL('**/cart.html');
    await this.pageTitle.waitFor({ state: 'visible' });
  }

  /**
   * @param {string} productName
   */
  itemByName(productName) {
    return this.cartItems.filter({ hasText: productName });
  }

  /**
   * @param {string} productName
   */
  async removeItemByName(productName) {
    await this.itemByName(productName).locator('button', { hasText: 'Remove' }).click();
  }

  async getItemNames() {
    return this.itemNames.allTextContents();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }
}

module.exports = { CartPage };
