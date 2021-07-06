package au.com.carsguide.www.cucumber.stepdefs;

//import com.nopcommerce.demo.pages.HomePage;
//import com.nopcommerce.demo.pages.LoginPage;
import au.com.carsguide.www.pages.HomePage;
import au.com.carsguide.www.pages.SearchPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.eo.Se;
import org.eclipse.jetty.util.HostMap;
import org.junit.Assert;

/**
 * Created by Jay
 */
public class MyStepDefs {


    @Given("^I am on homepage$")
    public void iAmOnHomepage()
    {

    }


    @When("^I mouse hover on “buy\\+sell” tab$")
    public void iMouseHoverOnBuySellTab()
    {
        new HomePage().mouseHoverOnBuyandSell();
    }

    @And("^I click Search Cars$")
    public void iClickSearchCars()
    {
        new HomePage().clickOnSearchCar();
    }

    @Then("^I navigate to new and used car search page$")
    public void iNavigateToNewAndUsedCarSearchPage()
    {

    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make)
    {
       new SearchPage().selectmake(make);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model)
    {
        new SearchPage().selectmodel(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location)
    {
       new SearchPage().selectlocation(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price)
    {
       new SearchPage().selectprice(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab()
    {
        new SearchPage().clickonsearchbutton();
    }

//    @Then("^I should see the make \"([^\"]*)\" in results$")
//    public void iShouldSeeTheMakeInResults()
//    {
//
//    }



//    @And("^I select make “<make>”$")
//    public void iSelectMakeMake(String make)
//    {
//        new SearchPage().selectmake(make);
//    }
//
//    @And("^I select model “<model>”$")
//    public void iSelectModelModel(String model)
//    {
//        new SearchPage().selectmodel(model);
//    }
//
//    @And("^I select location “<location>”$")
//    public void iSelectLocationLocation(String location)
//    {
//        new SearchPage().selectlocation(location);
//    }
//
//    @And("^I select price “<price>”$")
//    public void iSelectPricePrice(String price)
//    {
//        new SearchPage().selectprice(price);
//    }
//
//    @And("^I click on Find My Next Car tab$")
//    public void iClickOnFindMyNextCarTab()
//    {
//        new SearchPage().clickonsearchbutton();
//    }
//
//    @Then("^I should see the make “<make>” in results$")
//    public void iShouldSeeTheMakeMakeInResults()
//    {
//
//    }





}
