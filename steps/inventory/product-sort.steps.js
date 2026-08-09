const { expect, Given, When, Then } = require('../../fixtures/test-fixtures');
const { users } = require('../../data/users');
const { sortedPricesLowToHigh } = require('../../data/products');
const { isAscendingPriceOrder } = require('../../utils/helpers');

// ─── Given ───────────────────────────────────────────────────────────────────

Given('the user is logged in as a standard user', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await inventoryPage.isLoaded();
});

Given('the inventory page shows {int} products', async ({ inventoryPage }, count) => {
  await expect(inventoryPage.productItems).toHaveCount(count);
});

// ─── When ────────────────────────────────────────────────────────────────────

When('the user selects sort option {string}', async ({ inventoryPage }, optionLabel) => {
  await inventoryPage.sortBy(optionLabel);
  await expect(inventoryPage.sortDropdown.locator('option:checked')).toHaveText(optionLabel);
});

// ─── Then ────────────────────────────────────────────────────────────────────

Then(
  'the first product is {string} priced at {string}',
  async ({ inventoryPage }, productName, price) => {
    await expect(inventoryPage.productNames.first()).toHaveText(productName);
    await expect(inventoryPage.productPrices.first()).toHaveText(price);
  },
);

Then(
  'the last product is {string} priced at {string}',
  async ({ inventoryPage }, productName, price) => {
    await expect(inventoryPage.productNames.last()).toHaveText(productName);
    await expect(inventoryPage.productPrices.last()).toHaveText(price);
  },
);

Then('the product prices are sorted low to high', async ({ inventoryPage }) => {
  const prices = await inventoryPage.getProductPrices();
  expect(prices).toEqual(sortedPricesLowToHigh);
  expect(isAscendingPriceOrder(prices)).toBe(true);
});
