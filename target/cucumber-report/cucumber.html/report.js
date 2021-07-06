$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 14,
      "value": "#  Then  I should see the make \"\u003cmake\u003e\" in results"
    }
  ],
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "Q5",
        "NSW - New England",
        "$10,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Honda",
        "City",
        "NSW - Mid North Coast",
        "$15,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Jeep",
        "Commander",
        "NSW - Mid North Coast",
        "$7,500"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Mazda",
        "626",
        "SA - South East",
        "$3,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Alfa Romeo",
        "Alfa 159",
        "NT - All",
        "$5,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "BMW",
        "520I",
        "SA - South",
        "$40,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10783281100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Q5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$10,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 165171400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 449708900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 3847448900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 35800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 569891500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Q5",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 172515500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - New England",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 176866700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 167124600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 13376130600,
  "status": "passed"
});
formatter.after({
  "duration": 1067388400,
  "status": "passed"
});
formatter.before({
  "duration": 8320844900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"City\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Mid North Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$15,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 43300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 704679700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 5428744900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 19000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 192710200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 168177500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Mid North Coast",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 161482000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 135203900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 13844710500,
  "status": "passed"
});
formatter.after({
  "duration": 1067176800,
  "status": "passed"
});
formatter.before({
  "duration": 9470990000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Commander\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Mid North Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$7,500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 53000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 484964500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 3729583700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 44300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 197418000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Commander",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 184530100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Mid North Coast",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 202721300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$7,500",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 152199600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 13714690200,
  "status": "passed"
});
formatter.after({
  "duration": 1071168800,
  "status": "passed"
});
formatter.before({
  "duration": 8349521600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Mazda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"626\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"SA - South East\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$3,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 362486400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2680393900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 22900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 419641400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "626",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 160878200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - South East",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 169257700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$3,000",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 169412400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 14909812200,
  "status": "passed"
});
formatter.after({
  "duration": 1006718800,
  "status": "passed"
});
formatter.before({
  "duration": 10894351800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Alfa Romeo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Alfa 159\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$5,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 36300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 391700300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2492047100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 19300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alfa Romeo",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 167502800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alfa 159",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 696558700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - All",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 157815500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$5,000",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 145205400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 14918119600,
  "status": "passed"
});
formatter.after({
  "duration": 1072268900,
  "status": "passed"
});
formatter.before({
  "duration": 8474964600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"520I\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"SA - South\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 43300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 245403800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2702552700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 18300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 183257100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "520I",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 283753000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - South",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 169023500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 147566500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 16072758400,
  "status": "passed"
});
formatter.after({
  "duration": 1170231800,
  "status": "passed"
});
});