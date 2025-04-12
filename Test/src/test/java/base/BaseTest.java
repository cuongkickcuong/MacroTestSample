package base;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import org.apache.commons.lang.NotImplementedException;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.*;
import steps.Steps;

import java.nio.file.Paths;


@CucumberOptions(monochrome = true, strict = true, dryRun = false)
public class BaseTest extends AbstractTestNGCucumberTests {
    private static ThreadLocal<AppiumThread> drivers = new ThreadLocal<AppiumThread>();

    private static Steps steps ;
    public static String hubURL;

    public static String CURRENT_APP_PATH;

    public static String DEVICE_NAME;
    public static String PLATFORM_NAME;
    public static String UDID;
    public static String AUTOMATION_NAME;
    public static String PLATFORM_VERSION;
    public static String APP_PACKAGE;
    public static String APP_ACTIVITY;


    public synchronized static AppiumDriver getDriver() {
        return drivers.get().driver;
    }

    public static void setDriver(AppiumDriver driver) {
        drivers.get().setDriver(driver);
    }

    public static AppiumThread getAppiumThread() {
        return drivers.get();
    }

    @BeforeTest(alwaysRun = true)
    @Parameters({"hubURL"})
    public static void loadHubURL(String hubURL) {
        BaseTest.hubURL = hubURL;
    }

    @Parameters({"deviceName", "udid", "platformName", "platformVersion", "automationName", "appPath", "appPackage", "appActivity",})
    @BeforeClass(alwaysRun = true)
    public static void setUp(String deviceName, String udid, String platformName, String platformVersion,
                             String automationName,String appPath,
                             String appPackage, String appActivity) throws Exception {

        DEVICE_NAME = deviceName;
        PLATFORM_NAME = platformName;
        UDID = udid;
        AUTOMATION_NAME = automationName;
        PLATFORM_VERSION = platformVersion;
        APP_PACKAGE = appPackage;
        APP_ACTIVITY = appActivity;
        CURRENT_APP_PATH = appPath;

        // Set the Desired Capabilities
        System.out.println("Setup is setting DesiredCapabilities --------------");
        System.out.println("deviceName : " + deviceName);
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setCapability("deviceName", deviceName);
        caps.setCapability("udid", udid);
        caps.setCapability("platformName", platformName);
        caps.setCapability("platformVersion", platformVersion);
        caps.setCapability("automationName", automationName);
        caps.setCapability("newCommandTimeout", 0);

        if (platformName.toLowerCase().equals("ios")) {
            caps.setCapability("bundleId", appPackage);

            caps.setCapability("xcodeOrgId", "LC7X8F2XKM");
            caps.setCapability("xcodeSigningId", "iPhone Developer");
            caps.setCapability("updatedWDABundleId", "io.appium.WebDriverAgentRunner");
        } else if (platformName.toLowerCase().equals("android")) {
            caps.setCapability("appPackage", appPackage);
            caps.setCapability("appWaitActivity", appActivity);
        } else {
            throw new NotImplementedException("This platform " + platformName + " is not supportted");
        }

        if (appPath != null) {
            caps.setCapability("app",Paths.get(appPath).toAbsolutePath().normalize().toString());
        }
        caps.setCapability("noReset", false);          // Force Appium to reset
        caps.setCapability("fullReset", true);
        caps.setCapability("autoGrantPermissions", true);
        caps.setCapability("noSign", true);

        AppiumThread driverThread = new AppiumThread(caps);
        drivers.set(driverThread);
        BaseTest.getAppiumThread().setDriver(DriverSelector.getAppiumDriver(caps));
        steps = new Steps();
    }

    @AfterClass(alwaysRun = true)
    public synchronized static void tearDown() {
        System.out.println("Quit appium driver after class");
        getDriver().quit();
    }


    @AfterSuite
    public void suitEnd() {
        System.out.println("After suite");
    }

}