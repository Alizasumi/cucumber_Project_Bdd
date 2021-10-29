$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BankAndCashLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankCashFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Signin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User lands on new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters in accounts page \"accountTitle\" \"\u003caccount_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters in accounts page \"description\" \"\u003cDescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters in accounts page \"initialBalance\" \"\u003cinitial_Balance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters in accounts page \"accountNumber\" \"\u003caccount_Number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters in accounts page \"contactPerson\" \"\u003ccontact_Person\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters in accounts page \"Phone\" \"\u003ccontact_Phone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters in accounts page \"internetBankingURL\" \"\u003cinternet_Banking\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "account_Title",
        "Description",
        "initial_Balance",
        "account_Number",
        "contact_Person",
        "contact_Phone",
        "internet_Banking"
      ],
      "line": 27,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "savingaccount",
        "vvvv9v",
        "10000",
        "75034303",
        "sumi",
        "0434343",
        "http://www.tdcanadatrust.com"
      ],
      "line": 28,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2891566900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@BankCashFeature"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Signin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User lands on new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters in accounts page \"accountTitle\" \"savingaccount\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters in accounts page \"description\" \"vvvv9v\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters in accounts page \"initialBalance\" \"10000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters in accounts page \"accountNumber\" \"75034303\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters in accounts page \"contactPerson\" \"sumi\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters in accounts page \"Phone\" \"0434343\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters in accounts page \"internetBankingURL\" \"http://www.tdcanadatrust.com\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.User_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1043523200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enters_the_username(String)"
});
formatter.result({
  "duration": 139803800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enters_the_password(String)"
});
formatter.result({
  "duration": 139994700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Signin_button()"
});
formatter.result({
  "duration": 1555242500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 334321900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankCash",
      "offset": 16
    }
  ],
  "location": "LoginStepDefination.user_clicks_on(String)"
});
formatter.result({
  "duration": 1065173700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccount",
      "offset": 16
    }
  ],
  "location": "LoginStepDefination.user_clicks_on(String)"
});
formatter.result({
  "duration": 720239800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_lands_on_new_account_page()"
});
formatter.result({
  "duration": 28341300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountTitle",
      "offset": 30
    },
    {
      "val": "savingaccount",
      "offset": 45
    }
  ],
  "location": "LoginStepDefination.user_enters_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 971979300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 30
    },
    {
      "val": "vvvv9v",
      "offset": 44
    }
  ],
  "location": "LoginStepDefination.user_enters_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 529825200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "initialBalance",
      "offset": 30
    },
    {
      "val": "10000",
      "offset": 47
    }
  ],
  "location": "LoginStepDefination.user_enters_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 365749700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountNumber",
      "offset": 30
    },
    {
      "val": "75034303",
      "offset": 46
    }
  ],
  "location": "LoginStepDefination.user_enters_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 354531300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contactPerson",
      "offset": 30
    },
    {
      "val": "sumi",
      "offset": 46
    }
  ],
  "location": "LoginStepDefination.user_enters_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 224432900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 30
    },
    {
      "val": "0434343",
      "offset": 38
    }
  ],
  "location": "LoginStepDefination.user_enters_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 193604000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "internetBankingURL",
      "offset": 30
    },
    {
      "val": "http://www.tdcanadatrust.com",
      "offset": 51
    }
  ],
  "location": "LoginStepDefination.user_enters_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 83038100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 16
    }
  ],
  "location": "LoginStepDefination.user_clicks_on(String)"
});
formatter.result({
  "duration": 79324900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.User_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 48176300,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat steps.LoginStepDefination.User_should_be_able_to_validate_account_created_successfully(LoginStepDefination.java:154)\r\n\tat ✽.Then User should be able to validate account created successfully(features/BankAndCashLogin.feature:22)\r\n",
  "status": "failed"
});
});