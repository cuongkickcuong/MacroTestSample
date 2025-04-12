Feature: Variable page

  Scenario Outline: TC3 - Verify that the user is able to add - update - delete Variables

    Given Open application and skip to dashboard

    # Add a variable
    When User taps on "Variables" text
    And User click on
      | Locator      | Type               |
      | Add Category | accessibilityid    |
    And User enters the text "<VariableName>"
    And User taps on "Boolean" text
    And User taps on "Decimal" text
    And User taps on "OK" text
    Then I see the following
      | Verify          |
      | <VariableName>  |
      | 0.0             |

    # Update
    When User taps on "<VariableName>" text
    Then I see the following
      | Verify          |
      | <VariableName>  |
    When User enters "<newVariableName>" into field "enter_variable_dialog_value"
    And User taps on "OK" text
    Then I see the following
      | Verify             |
      | <newVariableName>  |
      | 0.0                |

    # Update value
    When User taps on "0.0" text
    And User enters "-8.5" into field "enter_variable_dialog_value"
    And User taps on "OK" text
    Then I see the following
      | Verify             |
      | <newVariableName>  |
      | -8.5               |

    # Delete
    And User click on
      | Locator  | Type               |
      | Delete   | accessibilityid    |
    Then I see the following
      | Verify             |
      | Are you sure you wish to delete this variable?  |
    And User taps on "OK" text
    Then I NOT see the following
      | Verify             |
      | <newVariableName>  |
      | <VariableName>     |

    Then verify all

    Examples:
      | VariableName | newVariableName |
      | New One      | Test Case 2     |