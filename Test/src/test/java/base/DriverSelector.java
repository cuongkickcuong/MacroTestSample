package base;

import java.net.MalformedURLException;
import java.net.URL;
import org.openqa.selenium.remote.DesiredCapabilities;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;

public class DriverSelector {
    public static AppiumDriver getAppiumDriver(DesiredCapabilities caps) throws Exception {
        AppiumDriver driver = null;
        String platformName = caps.getPlatform().toString();
        try {

            if (platformName.toLowerCase().equals("android")) {

                driver = new AndroidDriver(new URL(BaseTest.hubURL), caps);

            } else if (platformName.toLowerCase().equals("ios")) {

                driver = new IOSDriver<MobileElement>(new URL(BaseTest.hubURL), caps);

            } else {
                System.out.println("This PLATFORMNAME : " + platformName + " not implemented or not supported");

                throw new Exception("This PLATFORMNAME >>>> " + platformName + " is not supported");
            }

        } catch (MalformedURLException e) {

            e.printStackTrace();
            System.out.println(e.getMessage());
        }
        return driver;
    }

}
