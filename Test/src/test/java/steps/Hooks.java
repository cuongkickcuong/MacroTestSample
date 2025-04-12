package steps;

import base.BaseTest;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks {
    static Scenario scenario;
    @Before
    public void before(Scenario scenario){
        this.scenario = scenario;
        System.out.println("Start scenario " + scenario.getName());
    }

    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            takeScreenShot();
        }
        BaseTest.getDriver().resetApp();
        System.out.println("Quit scenario : resetApp done " + scenario.getName());
    }

    public static void takeScreenShot(){
        final byte[] screenshot = ((TakesScreenshot) BaseTest.getDriver()).getScreenshotAs(OutputType.BYTES);
        scenario.embed(screenshot, "image/png");
    }

}
