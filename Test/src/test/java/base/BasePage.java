package base;

import assertion.MySoftAssert;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileBy;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.asserts.SoftAssert;

import java.util.List;

public class BasePage {
    protected AppiumDriver driver;
    protected WebDriverWait wait;

    public static int EXPLICIT_TIME = 30;

    protected By title;

    SoftAssert softassert = new MySoftAssert();

    public BasePage() {
        this.driver = BaseTest.getDriver();
        wait = new WebDriverWait(driver, EXPLICIT_TIME);

        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
    }

    public void waitPresenceAndClick(String locator, String type) throws Exception {
        By by;

        if (type.toLowerCase().equals("xpath")) {
            by = MobileBy.xpath(locator);
        } else if (type.toLowerCase().equals("id")) {
            by = MobileBy.id(locator);
        }
        else if (type.toLowerCase().equals("accessibilityid")) {
            by = MobileBy.AccessibilityId(locator);
        }else {
            throw new Exception("Locator does not support");
        }
        waitPresenceAndClick(by);
    }

    public void waitPresenceAndClick(By by) {
        wait.ignoring(StaleElementReferenceException.class)
                .until(ExpectedConditions.presenceOfElementLocated(by)).click();
    }

    public WebElement waitPresence(By by, long timeOutInSeconds) {
        System.out.println("Start Finding Element : " + by.toString());
        WebElement element = null;
        try {
            element = new WebDriverWait(driver, timeOutInSeconds).ignoring(StaleElementReferenceException.class)
                    .until(ExpectedConditions
                            .presenceOfElementLocated(by));
        } catch (TimeoutException e) {
            System.out.println(e.getMessage());
            element = null;
        }
        return element;
    }

    public void waitPresenceByXpathAndClick(String text) {
        String xpath = String.format("//*[contains(@text,'%s')]", text);
        By by = MobileBy.xpath(xpath);
        waitPresenceAndClick(by);
    }

    public void verfiyElementExitByXpath(String text){
        String xpath = String.format("//*[contains(@text,'%s')]", text);
        By by = MobileBy.xpath(xpath);
        softassert.assertTrue(driver.findElements(by).size() > 0);
    }

    public void verfiyElementNotExitByXpath(String text){
        String xpath = String.format("//*[contains(@text,'%s')]", text);
        By by = MobileBy.xpath(xpath);
        softassert.assertFalse(driver.findElements(by).size() > 0);
    }

    public void sendKeysWithAction(String text){
        Actions action = new Actions(driver);
        action.sendKeys(text).perform();
    }

    public void waitPresenceAndType(String locatorId, String text) {
        By by = MobileBy.id(locatorId);
        WebElement element = wait.ignoring(StaleElementReferenceException.class)
                .until(ExpectedConditions.presenceOfElementLocated(by));
        element.clear();
        element.sendKeys(text);
    }

    public void verify_all() {
        softassert.assertAll();
    }
}

