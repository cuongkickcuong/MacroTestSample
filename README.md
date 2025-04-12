✅ 📦 Prerequisites
Make sure the following are installed and configured on your machine:

* Java JDK 11

* Maven

* Appium

* Node.js

* Android Studio / Xcode (depending on your target platform)


🛠 How to Set Up & Run the Tests
📁 1. Edit Device Configuration File
src/test/resources/GlobalGalaxyS21_5G_Demo.xml
Update the following parameters with your device info:

<parameter name="deviceName" value="Galaxy S21 5G"/>
<parameter name="udid" value="emulator-5554"/>
<parameter name="platformName" value="Android"/> <!-- or iOS -->
<parameter name="platformVersion" value="13"/>
<parameter name="appPath" value="/absolute/path/to/app.apk"/>
URL
🧪 2. Start Appium Server
Open Appium Desktop
Click Start Server
Confirm it runs on http://localhost:4723
Use port 4723 for local, or 4444 if running with Selenium Grid Hub

▶️ 3. Run the Test with Maven and TestNG
Navigate to your project root folder and run:
mvn clean test -Dtestng=src/test/resources/GlobalGalaxyS21_5G_Demo.xml
This will execute the test(s) defined in the XML file, using the specified parameters.

📊 4. View the Cucumber HTML Report
After the test completes, open the report at:
target/cucumber-html-reports/overview-feature.html
You can open this in any browser to view:
Feature-level results
Scenario steps
Pass/fail status
