Feature: Macro page

  Scenario: TC1 - Verify that the user is able to add three consecutive macros successfully

    Given Open application and skip to dashboard

    # Add a trigger macro and verify that it has been added correctly include name, option
    When User taps on "Add Macro" text
    And On Macro Page, tap on add new trigger icon
    And User taps on "Application" text
    And User taps on "App Install/Remove/Update" text
    And User taps on "Application Removed" text
    And User taps on "OK" text
    And User taps on "Any Application" text
    And User taps on "OK" text
    And I see the following
      | Verify              |
      | Application Removed |
      | Any Application     |

    # Add a action macro and verify that it has been added correctly include name, option
    And On Macro Page, tap on add new action icon
    And User taps on "Logging" text
    And User taps on "Clear Log" text
    And User taps on "System Log" text
    And User taps on "OK" text
    Then I see the following
      | Verify              |
      | Application Removed |
      | Any Application     |

    # Add a constraint macro and verify that it has been added correctly
    When On Macro Page, tap on add new constraint icon
    And User taps on "Device State" text
    And User taps on "Airplane Mode" text
    And User taps on "Airplane Mode Disabled" text
    And User taps on "OK" text
    Then I see the following
      | Verify                  |
      | Airplane Mode Disabled  |

    # Add new Local Variables
    When User taps on "Local Variables" text
    And On Macro Page, tap on add new variable icon
    And User enters the text "Test Case"
    And User taps on "Boolean" text
    And User taps on "Integer" text
    And User taps on "OK" text
    Then I see the following
      | Verify     |
      | Test Case  |
      | 0  |

    # Update the Local Variable
    And User taps on "Test Case" text
    And User enters "1" into field "enter_variable_dialog_value"
    And User taps on "OK" text
    Then I see the following
      | Verify     |
      | Test Case  |
      | 1  |

    Then verify all