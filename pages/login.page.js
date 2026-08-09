const { BasePage } = require('./base.page');

/**
 * Login Page Object — locators and actions only (no assertions).
 */
class LoginPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  /**
   * @param {string} username
   */
  async enterUsername(username) {
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
  }

  /**
   * @param {string} password
   */
  async enterPassword(password) {
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  /**
   * Convenience action for reusable login flows (e.g. preconditions).
   * @param {string} username
   * @param {string} password
   */
  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}

module.exports = { LoginPage };
