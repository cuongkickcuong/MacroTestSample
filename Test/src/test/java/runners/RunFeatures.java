package runners;

import base.BaseTest;
import cucumber.api.CucumberOptions;

@CucumberOptions(plugin = { "pretty", "html:target/cucumber-reports/cucumber-pretty",
        "json:target/cucumber-reports/CucumberTestReport.json",
        "rerun:target/cucumber-reports/rerunfeature.txt" },
        features = "src/test/resources/features",
		//tags = "@Cuong123",
	glue = {"steps", "Hooks"})

public class RunFeatures extends BaseTest {
}
