Feature: StopWatch screen

  Scenario Outline: TC4 - Verify that the user is able to create - play - pause - reset StopWatch

    Given Open application and skip to dashboard

    # Add a variable
    When User taps on "Stopwatches" text
    And User click on
      | Locator      | Type               |
      | Add Category | accessibilityid    |
    And User enters the text "<StopWatchName>"
    And User taps on "OK" text
    Then I see the following
      | Verify           |
      | <StopWatchName>  |
      | 00:00:00         |

    # start stopwatch
    And User click on
      | Locator  | Type               |
      | Start    | accessibilityid    |
    And User stays on this screen for 2 seconds
    Then I NOT see the following
      | Verify    |
      | 00:00:00  |

    # pause stopwatch
    And User click on
      | Locator  | Type               |
      | Pause    | accessibilityid    |
    And User click on
      | Locator  | Type               |
      | Start    | accessibilityid    |

    # reset stopwatch
    And User click on
      | Locator  | Type               |
      | Cancel   | accessibilityid    |
    Then I see the following
      | Verify           |
      | <StopWatchName>  |
      | 00:00:00         |

    Then verify all

    Examples:
      | StopWatchName |
      | Test Case 1  |