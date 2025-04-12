package base;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.imagecomparison.SimilarityMatchingResult;
import org.openqa.selenium.remote.DesiredCapabilities;
import steps.StepHelper;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

public class AppiumThread {

    public DesiredCapabilities caps;
    public AppiumDriver driver;
    public StepHelper stepHelper;
    public SimilarityMatchingResult similarityMatchingResult;

    public List<Process> processes = new ArrayList<Process>();
    public List<File> logs= new ArrayList<File>();

    ByteArrayOutputStream bout;
    ByteArrayOutputStream berr;



    public AppiumThread(DesiredCapabilities caps) {
        this.caps = caps;
        stepHelper = new StepHelper();
    }

    public void setDriver(AppiumDriver driver) {
        this.driver = driver;
    }

    public byte[] getConsoleBytesStdout(){
        String s = new String(bout.toByteArray(), StandardCharsets.UTF_8);
        String htmlFormat = s.replaceAll("(\r\n|\n\r|\r|\n)", "<br />");
        return htmlFormat.getBytes(StandardCharsets.UTF_8);
    }


}
