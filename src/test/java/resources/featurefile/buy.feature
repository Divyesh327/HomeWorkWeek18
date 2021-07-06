Feature: Search functionality

  @Smoke
  Scenario Outline: Search the buy car with model
  Given I am on homepage
  When  I mouse hover on “buy+sell” tab
  And   I click Search Cars
  Then  I navigate to new and used car search page
  And   I select make "<make>"
  And   I select model "<model>"
  And   I select location "<location>"
  And   I select price "<price>"
  And   I click on Find My Next Car tab
#  Then  I should see the make "<make>" in results

  Examples:
    |make       |model      |location               |price|
    |Audi       |Q5         |NSW - New England      |$10,000|
    |Honda      |City       |NSW - Mid North Coast  |$15,000|
    |Jeep       |Commander  |NSW - Mid North Coast  |$7,500|
    |Mazda      |626        |SA - South East        |$3,000|
    |Alfa Romeo |Giulia     |NSW - All              |$7,500|
    |BMW        |  520I     |SA - South             |$40,000|
