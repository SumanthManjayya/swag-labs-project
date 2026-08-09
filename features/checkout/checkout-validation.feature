@checkout
Feature: SauceDemo Checkout Validation
  As a SauceDemo shopper
  I want checkout to validate required customer fields
  So that incomplete orders cannot proceed

  @tc08 @negative
  Scenario: TC08 - Checkout required-field validation
    Given the user is logged in as a standard user
    And the shopping cart is empty
    When the user adds "Sauce Labs Backpack" to the cart
    And the user opens the shopping cart
    And the user clicks Checkout
    Then the checkout information page is displayed
    When the customer information fields are left empty
    And the user clicks Continue on checkout information
    Then the checkout error message is "Error: First Name is required"
    And the user remains on the checkout information page
