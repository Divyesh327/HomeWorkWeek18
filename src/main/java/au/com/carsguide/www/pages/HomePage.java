package au.com.carsguide.www.pages;

import au.com.carsguide.www.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility
{

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement buysell;

   @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement carselection;

    public void mouseHoverOnBuyandSell()
    {
        mouseHoverToElement(buysell);
        log.info("Hovering on Buy and Sell Menu --> " + buysell.toString());

    }

    public void clickOnSearchCar()
    {
        clickOnElement(carselection);
        log.info("Click on Desktop Menu --> " + carselection.toString());
    }



}
