const { BasePage } = require('./base.page');

class CheckoutCompletePage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.pageTitle = page.locator('.title');
    this.completeHeader = page.locator('.complete-header');
    this.completeText = page.locator('.complete-text');
    this.backHomeButton = page.locator('#back-to-products');
  }

  async isLoaded() {
    await this.page.waitForURL('**/checkout-complete.html');
    await this.pageTitle.waitFor({ state: 'visible' });
  }
}

module.exports = { CheckoutCompletePage };
