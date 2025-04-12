package steps;

import base.BaseTest;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.ByteArrayOutputStream;

import java.nio.charset.StandardCharsets;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks {
    ByteArrayOutputStream bout ;
    @Before
    public void before(Scenario scenario) throws Exception {
        System.out.println("Start scenario " + scenario.getName());
    }

    @After
    public void tearDown(Scenario scenario) throws Exception {
        System.out.println("            >>>> Quitting scenario " + scenario.getName() + " <<<<<         ");

        if (scenario.isFailed()) {

            // Take a screenshot...
           final byte[] screenshot = ((TakesScreenshot) BaseTest.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png"); // ... and embed it in the report.
            //scenario.embed(BaseTest.getAppiumThread().getConsoleBytesStdout(), "text/html");
        }
        BaseTest.getDriver().resetApp();
        System.out.println("            >>>> Quitted scenario : resetApp done " + scenario.getName() + " <<<<<");
    }

}
