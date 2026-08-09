# Swag Labs Playwright Automation (BDD + POM)

Playwright test automation for [SauceDemo / Swag Labs](https://www.saucedemo.com/) using:

- **BDD** — Gherkin feature files (`playwright-bdd`)
- **POM** — Page Object Model for UI locators and actions

## Framework Structure

```
swag-labs-playwright/
├── features/
│   ├── auth/          # TC01–TC04, TC10
│   ├── inventory/     # TC05
│   ├── cart/          # TC06–TC07
│   └── checkout/      # TC08–TC09
├── steps/             # Step definitions by module
├── pages/             # Page Object Model
├── fixtures/          # POM fixtures for BDD steps
├── data/              # Users, products, checkout data
├── utils/             # Helpers
└── playwright.config.js
```

## Setup

```bash
npm install
npx playwright install
```

## Run Tests

```bash
npm test                 # all TC01–TC10
npm run test:headed      # headed browser
npm run test:tc06        # single case, e.g. TC06
npm run test:cart        # cart suite
npm run test:checkout    # checkout suite
npm run test:smoke       # smoke tags
npm run report           # HTML report
```

> PowerShell: always quote tags — `npm run test:headed -- --grep "@tc06"`

## Test Case Mapping

| Tag | Feature file | Test Case |
|-----|--------------|-----------|
| `@tc01` | `features/auth/login.feature` | Successful login |
| `@tc02` | `features/auth/login.feature` | Locked-out user blocked |
| `@tc03` | `features/auth/login.feature` | Empty credentials validation |
| `@tc04` | `features/auth/login.feature` | Invalid credentials rejected |
| `@tc05` | `features/inventory/product-sort.feature` | Sort by price low to high |
| `@tc06` | `features/cart/add-to-cart.feature` | Add multiple products to cart |
| `@tc07` | `features/cart/remove-from-cart.feature` | Remove product from cart |
| `@tc08` | `features/checkout/checkout-validation.feature` | Checkout required-field validation |
| `@tc09` | `features/checkout/checkout-e2e.feature` | End-to-end checkout |
| `@tc10` | `features/auth/logout.feature` | Logout from side menu |
