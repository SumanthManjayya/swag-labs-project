@inventory
Feature: SauceDemo Product Sorting
  As a SauceDemo shopper
  I want to sort products by price
  So that I can find cheaper items first

  @tc05 @functional
  Scenario: TC05 - Sort products by price low to high
    Given the user is logged in as a standard user
    And the inventory page shows 6 products
    And the sort dropdown default value is "Name (A to Z)"
    When the user selects sort option "Price (low to high)"
    Then the first product is "Sauce Labs Onesie" priced at "$7.99"
    And the last product is "Sauce Labs Fleece Jacket" priced at "$49.99"
    And the product prices are sorted low to high
