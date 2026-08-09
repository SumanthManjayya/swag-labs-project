@cart
Feature: SauceDemo Cart - Add Products
  As a SauceDemo shopper
  I want to add multiple products to my cart
  So that I can purchase them together

  @tc06 @functional
  Scenario: TC06 - Add multiple products to cart
    Given the user is logged in as a standard user
    And the shopping cart is empty
    When the user adds "Sauce Labs Backpack" to the cart
    Then the product button for "Sauce Labs Backpack" shows "Remove"
    And the cart badge shows 1
    When the user adds "Sauce Labs Bike Light" to the cart
    Then the product button for "Sauce Labs Bike Light" shows "Remove"
    And the cart badge shows 2
    When the user opens the shopping cart
    Then the cart page is displayed
    And the cart contains 2 items
    And the cart contains "Sauce Labs Backpack" priced at "$29.99"
    And the cart contains "Sauce Labs Bike Light" priced at "$9.99"
    And the Continue Shopping and Checkout buttons are available
