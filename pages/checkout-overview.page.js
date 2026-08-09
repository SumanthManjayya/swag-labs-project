const { BasePage } = require('./base.page');

/**
 * Checkout Step Two — overview and totals.
 */
class CheckoutOverviewPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.pageTitle = page.locator('.title');
    this.finishButton = page.locator('#finish');
    this.cartItems = page.locator('.cart_item');
    this.itemNames = page.locator('.inventory_item_name');
    this.paymentInfo = page.locator('[data-test="payment-info-value"]');
    this.shippingInfo = page.locator('[data-test="shipping-info-value"]');
    this.itemTotal = page.locator('.summary_subtotal_label');
    this.tax = page.locator('.summary_tax_label');
    this.total = page.locator('.summary_total_label');
  }

  async isLoaded() {
    await this.page.waitForURL('**/checkout-step-two.html');
    await this.pageTitle.waitFor({ state: 'visible' });
  }

  /**
   * @param {string} productName
   */
  itemByName(productName) {
    return this.cartItems.filter({ hasText: productName });
  }

  async finishOrder() {
    await this.finishButton.click();
  }
}

module.exports = { CheckoutOverviewPage };
