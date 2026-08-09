@cart
Feature: SauceDemo Cart - Remove Products
  As a SauceDemo shopper
  I want to remove products from my cart
  So that my cart reflects only items I still want

  @tc07 @functional
  Scenario: TC07 - Remove product from cart
    Given the user is logged in as a standard user
    And the shopping cart is empty
    And the user has added "Sauce Labs Backpack" and "Sauce Labs Bike Light" to the cart
    And the cart badge shows 2
    When the user opens the shopping cart
    And the user removes "Sauce Labs Backpack" from the cart
    Then the cart does not contain "Sauce Labs Backpack"
    And the cart badge shows 1
    And the cart contains "Sauce Labs Bike Light" priced at "$9.99"
    When the user clicks Continue Shopping
    Then the inventory page is displayed
    And the product button for "Sauce Labs Backpack" shows "Add to cart"
    And the product button for "Sauce Labs Bike Light" shows "Remove"
