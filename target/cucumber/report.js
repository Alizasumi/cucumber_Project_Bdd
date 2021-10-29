$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/DataBaseLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios Login functionality Validation driving the data form MySql database",
  "description": "",
  "id": "techfios-login-functionality-validation-driving-the-data-form-mysql-database",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DbLogin"
    }
  ]
});
formatter.before({
  "duration": 3401206700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.User_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1280056700,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation-driving-the-data-form-mysql-database;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@DbScenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"username\" from mysql database",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"password\"  from mysql database",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"Signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 13
    }
  ],
  "location": "LoginStepDefination.user_enters_from_mysql_database(String)"
});
formatter.result({
  "duration": 936355700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Signin",
      "offset": 16
    }
  ],
  "location": "LoginStepDefination.user_clicks_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
});