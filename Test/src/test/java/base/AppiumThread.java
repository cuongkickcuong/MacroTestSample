package base;

import io.appium.java_client.AppiumDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class AppiumThread {

    public DesiredCapabilities caps;
    public AppiumDriver driver;


    public AppiumThread(DesiredCapabilities caps) {
        this.caps = caps;
    }

    public void setDriver(AppiumDriver driver) {
        this.driver = driver;
    }
}
