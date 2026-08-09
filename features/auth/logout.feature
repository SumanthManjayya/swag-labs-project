@logout @session
Feature: SauceDemo Logout
  As a SauceDemo customer
  I want to log out from the side menu
  So that my authenticated session ends securely

  @tc10 @functional
  Scenario: TC10 - Logout from application side menu
    Given the user is logged in as a standard user
    When the user opens the side menu
    Then the side menu shows Logout and Reset App State links
    When the user clicks Logout
    Then the user remains on the login page
    When the user navigates directly to the inventory page
    Then the user remains on the login page
