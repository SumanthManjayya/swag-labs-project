@login
Feature: SauceDemo Login
  As a SauceDemo customer
  I want login to accept valid users and reject blocked or invalid ones
  So that only authorized users can access the Products inventory page

  @tc01 @smoke @positive
  Scenario: TC01 - Successful login with valid credentials
    Given the user opens the SauceDemo application
    And the login page is fully loaded
    When the user enters username "standard_user"
    And the user enters password "secret_sauce"
    And the user clicks the Login button
    Then no login error message is displayed
    And the user is redirected to the inventory page
    And the page header shows "Products"
    And the product "Sauce Labs Backpack" is visible
    And the inventory shows 6 products
    And the shopping cart icon is visible
    And the sort dropdown default value is "Name (A to Z)"

  @tc02 @negative
  Scenario: TC02 - Login blocked for locked-out user
    Given the user opens the SauceDemo application
    And the login page is fully loaded
    When the user enters username "locked_out_user"
    And the user enters password "secret_sauce"
    And the user clicks the Login button
    Then the login error message is "Epic sadface: Sorry, this user has been locked out."
    And the user remains on the login page

  @tc03 @negative
  Scenario: TC03 - Login validation for empty credentials
    Given the user opens the SauceDemo application
    And the login page is fully loaded
    And the username and password fields are empty
    When the user clicks the Login button
    Then the login error message is "Epic sadface: Username is required"
    And the user remains on the login page

  @tc04 @negative
  Scenario: TC04 - Login fails with invalid credentials
    Given the user opens the SauceDemo application
    And the login page is fully loaded
    When the user enters username "invalid_user"
    And the user enters password "wrong_password"
    And the user clicks the Login button
    Then the login error message is "Epic sadface: Username and password do not match any user in this service"
    And the user remains on the login page
