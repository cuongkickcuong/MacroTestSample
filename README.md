***
### Prerequisites
1. Java
2. Maven
3. Appium
4. Selenium Standalone Server or Appium Service  
5. Cucumber for java + Gherkin syntax


***
## How to execute

1. Go to src/Test/resources/GlobalGalaxyS21_5G_Demo.xml
Input your device name, udid, platform ( android /iOS ), platform version
URL: If you're using Appium Server use Port 4723, if you're using Grid Hub infrastructure, change to port 4444
2. Go to Test folder, use command to run : mvn clean test -Dtestng='GlobalGalaxyS21_5G_Demo.xml'
3. Report will be located on src/test/target/cucumber-html-reports/overview-feature.html

