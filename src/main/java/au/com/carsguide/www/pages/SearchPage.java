package au.com.carsguide.www.pages;

import au.com.carsguide.www.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SearchPage extends Utility
{
    private static final Logger log = LogManager.getLogger(SearchPage.class.getName());

    @FindBy(xpath = "//select[@id='makes']")
    WebElement make;

    @FindBy(xpath = "//select[@id='models']")
    WebElement model;

    @FindBy(xpath = "//select[@id='locations']")
    WebElement location;

    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement price;

    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement search;

    public void selectmake(String make1)
    {
        sendTextToElement(make, make1);
        log.info("Entering email address : " + make1 + " to email field : " + make.toString());
    }

    public void selectmodel(String model1)
    {
        sendTextToElement(model, model1);
        log.info("Entering email address : " + model1 + " to email field : " + model.toString());
    }


    public void selectlocation(String location1)
    {
        sendTextToElement(location, location1);
        log.info("Entering email address : " + location1 + " to email field : " + location.toString());
    }

    public void selectprice(String price1)
    {
        sendTextToElement(price, price1);
        log.info("Entering email address : " + price1 + " to email field : " + price.toString());
    }

    public void clickonsearchbutton()
    {
        clickOnElement(search);
        log.info("Clicking on Search button : " + search.toString());
    }
}
