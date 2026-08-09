/**
 * Shared page actions available on authenticated pages.
 */
class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.resetAppStateLink = page.locator('#reset_sidebar_link');
    this.allItemsLink = page.locator('#inventory_sidebar_link');
    this.aboutLink = page.locator('#about_sidebar_link');
  }

  async openMenu() {
    await this.menuButton.click();
  }

  async logout() {
    await this.openMenu();
    await this.logoutLink.click();
  }

  async resetAppState() {
    await this.openMenu();
    await this.resetAppStateLink.click();
  }
}

module.exports = { BasePage };
