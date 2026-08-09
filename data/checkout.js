const checkoutCustomer = {
  firstName: 'John',
  lastName: 'Doe',
  postalCode: '12345',
};

const checkoutTotals = {
  itemTotal: 'Item total: $39.98',
  tax: 'Tax: $3.20',
  total: 'Total: $43.18',
};

const checkoutErrors = {
  firstNameRequired: 'Error: First Name is required',
  lastNameRequired: 'Error: Last Name is required',
  postalCodeRequired: 'Error: Postal Code is required',
};

const orderConfirmation = {
  header: 'Thank you for your order!',
  message:
    'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
};

module.exports = {
  checkoutCustomer,
  checkoutTotals,
  checkoutErrors,
  orderConfirmation,
};
