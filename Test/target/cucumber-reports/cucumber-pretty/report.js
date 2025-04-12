$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ActionBlock.feature");
formatter.feature({
  "name": "Action Block",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC2 - Verify that the user is able to add three consecutive action block successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open application and skip to dashboard",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.openApplicationAndSkipToDashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Action Blocks\" text",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "On Action Block screen, tap on add new trigger icon",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.tapOnAddActionBlockIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Action block name\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the text \"Block name 1\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userEnterTheText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Enter Description\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the text \"Description action block 1\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userEnterTheText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "On Action Block detail screen, tap on add new input variable icon",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.onActionBlockDetailScreenTapOnAddNewInputVariableIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Test Case 1\" into field \"variable_new_variable_dialog_name\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_into_field(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "inputCollapseExpandButton",
        "id"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Test Case 1"
      ]
    },
    {
      "cells": [
        "Default: False"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Test Case 1\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"True\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Test Case 1"
      ]
    },
    {
      "cells": [
        "Default: True"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "addActionButton",
        "id"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Logging\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Clear Log\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"System Log\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Clear Log"
      ]
    },
    {
      "cells": [
        "System Log"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "addOutputVariableButton",
        "id"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the text \"Output Variable 1\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userEnterTheText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Boolean\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"String\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "outputCollapseExpandButton",
        "id"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Output Variable 1"
      ]
    },
    {
      "cells": [
        "Default: \u003cempty\u003e"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Output Variable 1\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Output Variable 1"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"This is a testing string\" into field \"enter_variable_dialog_value\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_into_field(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Output Variable 1"
      ]
    },
    {
      "cells": [
        "This is a testing string"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "acceptButton",
        "id"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Block name 1"
      ]
    },
    {
      "cells": [
        "Description action block 1"
      ]
    },
    {
      "cells": [
        "Clear Log"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify all",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.verify_all()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Macro.feature");
formatter.feature({
  "name": "Macro page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC1 - Verify that the user is able to add three consecutive macros successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open application and skip to dashboard",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.openApplicationAndSkipToDashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Add Macro\" text",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "On Macro Page, tap on add new trigger icon",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.tapOnAddNewTriggerIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Application\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"App Install/Remove/Update\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Application Removed\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Any Application\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Application Removed"
      ]
    },
    {
      "cells": [
        "Any Application"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "On Macro Page, tap on add new action icon",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.onMacroPageTapOnAddNewActionIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Logging\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Clear Log\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"System Log\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Application Removed"
      ]
    },
    {
      "cells": [
        "Any Application"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "On Macro Page, tap on add new constraint icon",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.onMacroPageTapOnAddNewConstraintIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Device State\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Airplane Mode\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Airplane Mode Disabled\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Airplane Mode Disabled"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Local Variables\" text",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "On Macro Page, tap on add new variable icon",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.onMacroPageTapOnAddNewVariableIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the text \"Test Case\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userEnterTheText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Boolean\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Integer\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Test Case"
      ]
    },
    {
      "cells": [
        "0"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Test Case\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"1\" into field \"enter_variable_dialog_value\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_into_field(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Test Case"
      ]
    },
    {
      "cells": [
        "1"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify all",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.verify_all()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/StopWatch.feature");
formatter.feature({
  "name": "StopWatch screen",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC4 - Verify that the user is able to create - play - pause - reset StopWatch",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open application and skip to dashboard",
  "keyword": "Given "
});
formatter.step({
  "name": "User taps on \"Stopwatches\" text",
  "keyword": "When "
});
formatter.step({
  "name": "User click on",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "Add Category",
        "accessibilityid"
      ]
    }
  ]
});
formatter.step({
  "name": "User enters the text \"\u003cStopWatchName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.step({
  "name": "I see the following",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "\u003cStopWatchName\u003e"
      ]
    },
    {
      "cells": [
        "00:00:00"
      ]
    }
  ]
});
formatter.step({
  "name": "User click on",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "Start",
        "accessibilityid"
      ]
    }
  ]
});
formatter.step({
  "name": "User stays on this screen for 2 seconds",
  "keyword": "And "
});
formatter.step({
  "name": "I NOT see the following",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "00:00:00"
      ]
    }
  ]
});
formatter.step({
  "name": "User click on",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "Pause",
        "accessibilityid"
      ]
    }
  ]
});
formatter.step({
  "name": "User click on",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "Start",
        "accessibilityid"
      ]
    }
  ]
});
formatter.step({
  "name": "User click on",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "Cancel",
        "accessibilityid"
      ]
    }
  ]
});
formatter.step({
  "name": "I see the following",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "\u003cStopWatchName\u003e"
      ]
    },
    {
      "cells": [
        "00:00:00"
      ]
    }
  ]
});
formatter.step({
  "name": "verify all",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "StopWatchName"
      ]
    },
    {
      "cells": [
        "Test Case 1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC4 - Verify that the user is able to create - play - pause - reset StopWatch",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open application and skip to dashboard",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.openApplicationAndSkipToDashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Stopwatches\" text",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "Add Category",
        "accessibilityid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the text \"Test Case 1\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userEnterTheText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Test Case 1"
      ]
    },
    {
      "cells": [
        "00:00:00"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "Start",
        "accessibilityid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User stays on this screen for 2 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_stays_on_this_screen_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I NOT see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "00:00:00"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyNotExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "Pause",
        "accessibilityid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "Start",
        "accessibilityid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "Cancel",
        "accessibilityid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Test Case 1"
      ]
    },
    {
      "cells": [
        "00:00:00"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify all",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.verify_all()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Variable.feature");
formatter.feature({
  "name": "Variable page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC3 - Verify that the user is able to add - update - delete Variables",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open application and skip to dashboard",
  "keyword": "Given "
});
formatter.step({
  "name": "User taps on \"Variables\" text",
  "keyword": "When "
});
formatter.step({
  "name": "User click on",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "Add Category",
        "accessibilityid"
      ]
    }
  ]
});
formatter.step({
  "name": "User enters the text \"\u003cVariableName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User taps on \"Boolean\" text",
  "keyword": "And "
});
formatter.step({
  "name": "User taps on \"Decimal\" text",
  "keyword": "And "
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.step({
  "name": "I see the following",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "\u003cVariableName\u003e"
      ]
    },
    {
      "cells": [
        "0.0"
      ]
    }
  ]
});
formatter.step({
  "name": "User taps on \"\u003cVariableName\u003e\" text",
  "keyword": "When "
});
formatter.step({
  "name": "I see the following",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "\u003cVariableName\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "User enters \"\u003cnewVariableName\u003e\" into field \"enter_variable_dialog_value\"",
  "keyword": "When "
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.step({
  "name": "I see the following",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "\u003cnewVariableName\u003e"
      ]
    },
    {
      "cells": [
        "0.0"
      ]
    }
  ]
});
formatter.step({
  "name": "User taps on \"0.0\" text",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"-8.5\" into field \"enter_variable_dialog_value\"",
  "keyword": "And "
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.step({
  "name": "I see the following",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "\u003cnewVariableName\u003e"
      ]
    },
    {
      "cells": [
        "-8.5"
      ]
    }
  ]
});
formatter.step({
  "name": "User click on",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "Delete",
        "accessibilityid"
      ]
    }
  ]
});
formatter.step({
  "name": "I see the following",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Are you sure you wish to delete this variable?"
      ]
    }
  ]
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.step({
  "name": "I NOT see the following",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "\u003cnewVariableName\u003e"
      ]
    },
    {
      "cells": [
        "\u003cVariableName\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "verify all",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "VariableName",
        "newVariableName"
      ]
    },
    {
      "cells": [
        "New One",
        "Test Case 2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC3 - Verify that the user is able to add - update - delete Variables",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open application and skip to dashboard",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.openApplicationAndSkipToDashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Variables\" text",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "Add Category",
        "accessibilityid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the text \"New One\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userEnterTheText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Boolean\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"Decimal\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "New One"
      ]
    },
    {
      "cells": [
        "0.0"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"New One\" text",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "New One"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Test Case 2\" into field \"enter_variable_dialog_value\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_enters_into_field(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Test Case 2"
      ]
    },
    {
      "cells": [
        "0.0"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"0.0\" text",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"-8.5\" into field \"enter_variable_dialog_value\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_into_field(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Test Case 2"
      ]
    },
    {
      "cells": [
        "-8.5"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on",
  "rows": [
    {
      "cells": [
        "Locator",
        "Type"
      ]
    },
    {
      "cells": [
        "Delete",
        "accessibilityid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Are you sure you wish to delete this variable?"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User taps on \"OK\" text",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userTapsOnText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I NOT see the following",
  "rows": [
    {
      "cells": [
        "Verify"
      ]
    },
    {
      "cells": [
        "Test Case 2"
      ]
    },
    {
      "cells": [
        "New One"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.softAssertVerifyNotExistingText(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify all",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.verify_all()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});