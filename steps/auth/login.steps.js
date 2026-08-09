const { expect, Given, When, Then } = require('../../fixtures/test-fixtures');

// ─── Given ───────────────────────────────────────────────────────────────────

Given('the user opens the SauceDemo application', async ({ loginPage }) => {
  await loginPage.goto();
});

Given('the login page is fully loaded', async ({ page, loginPage }) => {
  await expect(page).toHaveTitle('Swag Labs');
  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();
});

Given('the username and password fields are empty', async ({ loginPage }) => {
  await expect(loginPage.usernameInput).toHaveValue('');
  await expect(loginPage.passwordInput).toHaveValue('');
});

// ─── When ────────────────────────────────────────────────────────────────────

When('the user enters username {string}', async ({ loginPage }, username) => {
  await loginPage.enterUsername(username);
  await expect(loginPage.usernameInput).toHaveValue(username);
});

When('the user enters password {string}', async ({ loginPage }, password) => {
  await loginPage.enterPassword(password);
  await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
  await expect(loginPage.passwordInput).toHaveValue(password);
});

When('the user clicks the Login button', async ({ loginPage }) => {
  await loginPage.clickLogin();
});

// ─── Then ────────────────────────────────────────────────────────────────────

Then('no login error message is displayed', async ({ loginPage }) => {
  await expect(loginPage.errorMessage).toBeHidden();
});

Then('the login error message is {string}', async ({ loginPage }, message) => {
  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toHaveText(message);
});

Then('the user remains on the login page', async ({ page, loginPage }) => {
  await expect(page).not.toHaveURL(/inventory\.html/);
  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();
});

Then('the user is redirected to the inventory page', async ({ page, inventoryPage }) => {
  await inventoryPage.isLoaded();
  await expect(page).toHaveURL(/inventory\.html/);
});

Then('the page header shows {string}', async ({ inventoryPage }, headerText) => {
  await expect(inventoryPage.pageTitle).toHaveText(headerText);
});

Then('the product {string} is visible', async ({ inventoryPage }, productName) => {
  await expect(inventoryPage.productByName(productName)).toBeVisible();
});

Then('the inventory shows {int} products', async ({ inventoryPage }, count) => {
  await expect(inventoryPage.productItems).toHaveCount(count);
});

Then('the shopping cart icon is visible', async ({ inventoryPage }) => {
  await expect(inventoryPage.cartLink).toBeVisible();
});

Then(
  'the sort dropdown default value is {string}',
  async ({ inventoryPage }, sortLabel) => {
    await expect(inventoryPage.sortDropdown).toBeVisible();
    await expect(inventoryPage.sortDropdown).toHaveValue('az');
    await expect(inventoryPage.sortDropdown.locator('option:checked')).toHaveText(sortLabel);
  },
);
