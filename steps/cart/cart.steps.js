const { expect, Given, When, Then } = require('../../fixtures/test-fixtures');

// ─── Given ───────────────────────────────────────────────────────────────────

Given('the shopping cart is empty', async ({ inventoryPage }) => {
  await expect(inventoryPage.cartBadge).toHaveCount(0);
});

Given(
  'the user has added {string} and {string} to the cart',
  async ({ inventoryPage }, productOne, productTwo) => {
    await inventoryPage.addProductByName(productOne);
    await inventoryPage.addProductByName(productTwo);
  },
);

// ─── When ────────────────────────────────────────────────────────────────────

When('the user adds {string} to the cart', async ({ inventoryPage }, productName) => {
  await inventoryPage.addProductByName(productName);
});

When('the user opens the shopping cart', async ({ inventoryPage, cartPage }) => {
  await inventoryPage.openCart();
  await cartPage.isLoaded();
});

When('the user removes {string} from the cart', async ({ cartPage }, productName) => {
  await cartPage.removeItemByName(productName);
});

When('the user clicks Continue Shopping', async ({ cartPage, inventoryPage }) => {
  await cartPage.continueShopping();
  await inventoryPage.isLoaded();
});

When('the user clicks Checkout', async ({ cartPage, checkoutInfoPage }) => {
  await cartPage.proceedToCheckout();
  await checkoutInfoPage.isLoaded();
});

// ─── Then ────────────────────────────────────────────────────────────────────

Then('the cart badge shows {int}', async ({ inventoryPage }, count) => {
  await expect(inventoryPage.cartBadge).toBeVisible();
  await expect(inventoryPage.cartBadge).toHaveText(String(count));
});

Then(
  'the product button for {string} shows {string}',
  async ({ inventoryPage }, productName, buttonLabel) => {
    await expect(inventoryPage.productActionButton(productName)).toHaveText(buttonLabel);
  },
);

Then('the cart page is displayed', async ({ page, cartPage }) => {
  await expect(page).toHaveURL(/cart\.html/);
  await expect(cartPage.pageTitle).toHaveText('Your Cart');
});

Then('the cart contains {int} items', async ({ cartPage }, count) => {
  await expect(cartPage.cartItems).toHaveCount(count);
});

Then(
  'the cart contains {string} priced at {string}',
  async ({ cartPage }, productName, price) => {
    const item = cartPage.itemByName(productName);
    await expect(item).toBeVisible();
    await expect(item.locator('.inventory_item_price')).toHaveText(price);
    await expect(item.locator('.cart_quantity')).toHaveText('1');
  },
);

Then('the cart does not contain {string}', async ({ cartPage }, productName) => {
  await expect(cartPage.itemByName(productName)).toHaveCount(0);
});

Then('the Continue Shopping and Checkout buttons are available', async ({ cartPage }) => {
  await expect(cartPage.continueShoppingButton).toBeVisible();
  await expect(cartPage.continueShoppingButton).toBeEnabled();
  await expect(cartPage.checkoutButton).toBeVisible();
  await expect(cartPage.checkoutButton).toBeEnabled();
});

Then('the inventory page is displayed', async ({ page, inventoryPage }) => {
  await inventoryPage.isLoaded();
  await expect(page).toHaveURL(/inventory\.html/);
  await expect(inventoryPage.pageTitle).toHaveText('Products');
});
