package steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import io.appium.java_client.AppiumDriver;
import base.BaseTest;


public class StepHelper {
    public Scenario scenario;
    public StepHelper() {
    }

    public void takeScreenShot(){
        AppiumDriver appiumDriver = BaseTest.getDriver();
        byte[] appScreen = null;
        appScreen = ((TakesScreenshot)appiumDriver).getScreenshotAs(OutputType.BYTES);
        scenario.embed(appScreen, "image/png");
    }

}
