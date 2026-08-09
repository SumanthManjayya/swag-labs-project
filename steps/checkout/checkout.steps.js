const { expect, Given, When, Then } = require('../../fixtures/test-fixtures');

// ─── Given / When ────────────────────────────────────────────────────────────

Given('the customer information fields are left empty', async ({ checkoutInfoPage }) => {
  await expect(checkoutInfoPage.firstNameInput).toHaveValue('');
  await expect(checkoutInfoPage.lastNameInput).toHaveValue('');
  await expect(checkoutInfoPage.postalCodeInput).toHaveValue('');
});

When('the user enters checkout first name {string}', async ({ checkoutInfoPage }, firstName) => {
  await checkoutInfoPage.enterFirstName(firstName);
  await expect(checkoutInfoPage.firstNameInput).toHaveValue(firstName);
});

When('the user enters checkout last name {string}', async ({ checkoutInfoPage }, lastName) => {
  await checkoutInfoPage.enterLastName(lastName);
  await expect(checkoutInfoPage.lastNameInput).toHaveValue(lastName);
});

When(
  'the user enters checkout postal code {string}',
  async ({ checkoutInfoPage }, postalCode) => {
    await checkoutInfoPage.enterPostalCode(postalCode);
    await expect(checkoutInfoPage.postalCodeInput).toHaveValue(postalCode);
  },
);

When('the user clicks Continue on checkout information', async ({ checkoutInfoPage }) => {
  await checkoutInfoPage.submit();
});

When('the user clicks Finish', async ({ checkoutOverviewPage, checkoutCompletePage }) => {
  await checkoutOverviewPage.finishOrder();
  await checkoutCompletePage.isLoaded();
});

// ─── Then ────────────────────────────────────────────────────────────────────

Then('the checkout information page is displayed', async ({ page, checkoutInfoPage }) => {
  await checkoutInfoPage.isLoaded();
  await expect(page).toHaveURL(/checkout-step-one\.html/);
  await expect(checkoutInfoPage.firstNameInput).toBeVisible();
  await expect(checkoutInfoPage.lastNameInput).toBeVisible();
  await expect(checkoutInfoPage.postalCodeInput).toBeVisible();
});

Then('the checkout error message is {string}', async ({ checkoutInfoPage }, message) => {
  await expect(checkoutInfoPage.errorMessage).toBeVisible();
  await expect(checkoutInfoPage.errorMessage).toHaveText(message);
});

Then('the user remains on the checkout information page', async ({ page }) => {
  await expect(page).toHaveURL(/checkout-step-one\.html/);
  await expect(page).not.toHaveURL(/checkout-step-two\.html/);
});

Then('the checkout overview page is displayed', async ({ page, checkoutOverviewPage }) => {
  await checkoutOverviewPage.isLoaded();
  await expect(page).toHaveURL(/checkout-step-two\.html/);
});

Then(
  'the overview contains {string} priced at {string}',
  async ({ checkoutOverviewPage }, productName, price) => {
    const item = checkoutOverviewPage.itemByName(productName);
    await expect(item).toBeVisible();
    await expect(item.locator('.inventory_item_price')).toHaveText(price);
    await expect(item.locator('.cart_quantity')).toHaveText('1');
  },
);

Then('the payment information is visible', async ({ checkoutOverviewPage }) => {
  await expect(checkoutOverviewPage.paymentInfo).toBeVisible();
  await expect(checkoutOverviewPage.paymentInfo).not.toHaveText('');
});

Then('the shipping information is visible', async ({ checkoutOverviewPage }) => {
  await expect(checkoutOverviewPage.shippingInfo).toBeVisible();
  await expect(checkoutOverviewPage.shippingInfo).not.toHaveText('');
});

Then('the item total is {string}', async ({ checkoutOverviewPage }, text) => {
  await expect(checkoutOverviewPage.itemTotal).toHaveText(text);
});

Then('the tax is {string}', async ({ checkoutOverviewPage }, text) => {
  await expect(checkoutOverviewPage.tax).toHaveText(text);
});

Then('the total is {string}', async ({ checkoutOverviewPage }, text) => {
  await expect(checkoutOverviewPage.total).toHaveText(text);
});

Then('the checkout complete page is displayed', async ({ page, checkoutCompletePage }) => {
  await checkoutCompletePage.isLoaded();
  await expect(page).toHaveURL(/checkout-complete\.html/);
});

Then(
  'the order confirmation header is {string}',
  async ({ checkoutCompletePage }, header) => {
    await expect(checkoutCompletePage.completeHeader).toHaveText(header);
    await expect(checkoutCompletePage.completeText).toBeVisible();
  },
);

Then('the Back Home button is visible', async ({ checkoutCompletePage }) => {
  await expect(checkoutCompletePage.backHomeButton).toBeVisible();
});
