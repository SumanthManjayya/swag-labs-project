const { BasePage } = require('./base.page');

/**
 * Checkout Step One — customer information.
 */
class CheckoutInfoPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.pageTitle = page.locator('.title');
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.cancelButton = page.locator('#cancel');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async isLoaded() {
    await this.page.waitForURL('**/checkout-step-one.html');
    await this.firstNameInput.waitFor({ state: 'visible' });
  }

  /**
   * @param {string} firstName
   */
  async enterFirstName(firstName) {
    await this.firstNameInput.fill(firstName);
  }

  /**
   * @param {string} lastName
   */
  async enterLastName(lastName) {
    await this.lastNameInput.fill(lastName);
  }

  /**
   * @param {string} postalCode
   */
  async enterPostalCode(postalCode) {
    await this.postalCodeInput.fill(postalCode);
  }

  /**
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} postalCode
   */
  async fillCustomerInfo(firstName, lastName, postalCode) {
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterPostalCode(postalCode);
  }

  async submit() {
    await this.continueButton.click();
  }
}

module.exports = { CheckoutInfoPage };
