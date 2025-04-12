package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.MobileBy;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.asserts.SoftAssert;
import assertion.MySoftAssert;
import base.BasePage;

import java.util.List;
import java.util.Map;

public class Steps {
    BasePage page = new BasePage();

    @Given("Open application and skip to dashboard")
    public void openApplicationAndSkipToDashboard() {
        page.waitPresenceAndClick(MobileBy.id("button_skip"));
        page.waitPresenceAndClick(MobileBy.AccessibilityId("Navigate up"));
    }

    @When("User taps on {string} text")
    public void userTapsOnText(String text) {
        page.waitPresenceByXpathAndClick(text);
    }

    @When("User enters the text {string}")
    public void userEnterTheText(String text) throws InterruptedException {
        for (int index = 0; index < text.length(); index++) {
            char character = text.charAt(index);
            page.sendKeysWithAction(String.valueOf(character));
        }
    }

    @When("User enters {string} into field {string}")
    public void user_enters_into_field(String text, String id) {
        page.waitPresenceAndType(id, text);
    }

    @Then("I see the following")
    public void softAssertVerifyExistingText(DataTable dt) {
        List<Map<String, String>> list = dt.asMaps(String.class, String.class);
        for (int i = 0; i < list.size(); i++) {
            String verify = list.get(i).get("Verify");
            page.verfiyElementExitByXpath(verify);
        }
    }

    @Then("I NOT see the following")
    public void softAssertVerifyNotExistingText(DataTable dt) {
        List<Map<String, String>> list = dt.asMaps(String.class, String.class);
        for (int i = 0; i < list.size(); i++) {
            String verify = list.get(i).get("Verify");
            page.verfiyElementNotExitByXpath(verify);
        }
    }

    @When("User(s) stay(s) on this screen for {int} seconds")
    public void user_stays_on_this_screen_for_seconds(Integer seconds) throws InterruptedException {
        for (int i = 0; i < seconds; i++) {
            Thread.sleep(1000); // wake up before session expired
        }
    }

    @Then("User click(s) on")
    public void user_click_on(DataTable dt) throws Exception {

        List<Map<String, String>> list = dt.asMaps(String.class, String.class);

        for (int i = 0; i < list.size(); i++) {
            String locator = list.get(i).get("Locator");
            String type = list.get(i).get("Type");
            page.waitPresenceAndClick(locator, type);

        }
    }

    @Then("verify all")
    public void verify_all() {
        page.verify_all();
    }

    ///////////////// Macro Screen ////////////////
    @And("On Macro Page, tap on add new trigger icon")
    public void tapOnAddNewTriggerIcon() {
        page.waitPresenceAndClick(MobileBy.AccessibilityId("Add Trigger"));
    }

    @And("On Macro Page, tap on add new action icon")
    public void onMacroPageTapOnAddNewActionIcon() {
        page.waitPresenceAndClick(MobileBy.AccessibilityId("Add Action"));
    }


    @When("On Macro Page, tap on add new constraint icon")
    public void onMacroPageTapOnAddNewConstraintIcon() {
        page.waitPresenceAndClick(MobileBy.AccessibilityId("Add constraint"));
    }

    @When("On Macro Page, tap on add new variable icon")
    public void onMacroPageTapOnAddNewVariableIcon() {
        page.waitPresenceAndClick(MobileBy.id("addVariableButton"));
    }

    ////////////// Action Blocks screen /////////////////

    @And("On Action Block screen, tap on add new trigger icon")
    public void tapOnAddActionBlockIcon() {
        page.waitPresenceAndClick(MobileBy.id("fab"));
    }

    @And("On Action Block detail screen, tap on add new input variable icon")
    public void onActionBlockDetailScreenTapOnAddNewInputVariableIcon() {
        page.waitPresenceAndClick(MobileBy.id("addInputVariableButton"));
    }
}