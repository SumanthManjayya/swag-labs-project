const { expect, When, Then } = require('../../fixtures/test-fixtures');

When('the user opens the side menu', async ({ inventoryPage }) => {
  await inventoryPage.openMenu();
});

When('the user clicks Logout', async ({ inventoryPage }) => {
  await inventoryPage.logoutLink.click();
});

When('the user navigates directly to the inventory page', async ({ page }) => {
  await page.goto('/inventory.html');
});

Then('the side menu shows Logout and Reset App State links', async ({ inventoryPage }) => {
  await expect(inventoryPage.allItemsLink).toBeVisible();
  await expect(inventoryPage.aboutLink).toBeVisible();
  await expect(inventoryPage.logoutLink).toBeVisible();
  await expect(inventoryPage.resetAppStateLink).toBeVisible();
});
