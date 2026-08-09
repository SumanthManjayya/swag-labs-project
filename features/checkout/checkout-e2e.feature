@checkout @smoke
Feature: SauceDemo End-to-End Checkout
  As a SauceDemo shopper
  I want to complete a full purchase
  So that my order is confirmed successfully

  @tc09 @e2e @critical
  Scenario: TC09 - Complete end-to-end checkout successfully
    Given the user is logged in as a standard user
    And the shopping cart is empty
    When the user adds "Sauce Labs Backpack" to the cart
    And the user adds "Sauce Labs Bike Light" to the cart
    And the cart badge shows 2
    And the user opens the shopping cart
    And the user clicks Checkout
    And the user enters checkout first name "John"
    And the user enters checkout last name "Doe"
    And the user enters checkout postal code "12345"
    And the user clicks Continue on checkout information
    Then the checkout overview page is displayed
    And the overview contains "Sauce Labs Backpack" priced at "$29.99"
    And the overview contains "Sauce Labs Bike Light" priced at "$9.99"
    And the payment information is visible
    And the shipping information is visible
    And the item total is "Item total: $39.98"
    And the tax is "Tax: $3.20"
    And the total is "Total: $43.18"
    When the user clicks Finish
    Then the checkout complete page is displayed
    And the order confirmation header is "Thank you for your order!"
    And the Back Home button is visible
