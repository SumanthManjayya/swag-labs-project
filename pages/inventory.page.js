const { BasePage } = require('./base.page');

/**
 * Inventory (Products) Page Object — locators and actions only.
 */
class InventoryPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.pageTitle = page.locator('.title');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.productItems = page.locator('.inventory_item');
    this.productNames = page.locator('.inventory_item_name');
    this.productPrices = page.locator('.inventory_item_price');
  }

  async isLoaded() {
    await this.page.waitForURL('**/inventory.html');
    await this.pageTitle.waitFor({ state: 'visible' });
  }

  /**
   * @param {string} productName
   */
  productCard(productName) {
    return this.page.locator('.inventory_item').filter({ hasText: productName });
  }

  /**
   * @param {string} productName
   */
  productByName(productName) {
    return this.productNames.filter({ hasText: productName });
  }

  /**
   * @param {string} productName
   */
  productActionButton(productName) {
    return this.productCard(productName).locator('button');
  }

  /**
   * @param {string} optionLabel
   */
  async sortBy(optionLabel) {
    await this.sortDropdown.selectOption({ label: optionLabel });
  }

  /**
   * @param {string} productName
   */
  async addProductByName(productName) {
    await this.productCard(productName).getByRole('button', { name: 'Add to cart' }).click();
  }

  /**
   * @param {string} slug
   */
  async addProductToCart(slug) {
    await this.page.locator(`[data-test="add-to-cart-${slug}"]`).click();
  }

  /**
   * @param {string} slug
   */
  async removeProductFromCart(slug) {
    await this.page.locator(`[data-test="remove-${slug}"]`).click();
  }

  async getProductPrices() {
    return this.productPrices.allTextContents();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async getCartBadgeCount() {
    return this.cartBadge.textContent();
  }

  async getSelectedSortLabel() {
    return this.sortDropdown.locator('option:checked').textContent();
  }
}

module.exports = { InventoryPage };
