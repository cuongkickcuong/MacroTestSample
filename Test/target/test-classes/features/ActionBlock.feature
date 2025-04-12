Feature: Action Block

  Scenario: TC2 - Verify that the user is able to add three consecutive action block successfully

    Given Open application and skip to dashboard

    # Add a trigger macro and verify that it has been added correctly include name, option
    When User taps on "Action Blocks" text
    And On Action Block screen, tap on add new trigger icon
    And User taps on "Action block name" text
    And User enters the text "Block name 1"
    And User taps on "Enter Description" text
    And User enters the text "Description action block 1"
    And On Action Block detail screen, tap on add new input variable icon
    And User enters "Test Case 1" into field "variable_new_variable_dialog_name"
    And User taps on "OK" text
    And User click on
      | Locator                   | Type  |
      | inputCollapseExpandButton | id    |
    Then I see the following
      | Verify         |
      | Test Case 1    |
      | Default: False |

    # update input value
    And User taps on "Test Case 1" text
    And User taps on "True" text
    And User taps on "OK" text
    Then I see the following
      | Verify         |
      | Test Case 1    |
      | Default: True  |

    # Add Action
    And User click on
      | Locator         | Type  |
      | addActionButton | id    |
    And User taps on "Logging" text
    And User taps on "Clear Log" text
    And User taps on "System Log" text
    And User taps on "OK" text
    Then I see the following
      | Verify     |
      | Clear Log  |
      | System Log |

    # Add Output Variable
    And User click on
      | Locator         | Type  |
      | addOutputVariableButton | id    |
    And User enters the text "Output Variable 1"
    And User taps on "Boolean" text
    And User taps on "String" text
    And User taps on "OK" text
    And User click on
      | Locator                    | Type  |
      | outputCollapseExpandButton | id    |
    Then I see the following
      | Verify             |
      | Output Variable 1  |
      | Default: <empty>   |

    # # update out value

    And User taps on "Output Variable 1" text
    And I see the following
      | Verify                    |
      | Output Variable 1         |
    And User enters "This is a testing string" into field "enter_variable_dialog_value"
    And User taps on "OK" text
    And I see the following
      | Verify                    |
      | Output Variable 1         |
      | This is a testing string  |

    # Add a action macro and verify that it has been added correctly include name, option
    And User click on
      | Locator      | Type  |
      | acceptButton | id    |
    And I see the following
      | Verify                      |
      | Block name 1                |
      | Description action block 1  |
      | Clear Log  |

    Then verify all