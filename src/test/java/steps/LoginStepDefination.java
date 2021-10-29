package steps;

import java.sql.SQLException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.Bank_Cash;
import pages.DataBasePage;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefination extends TestBase{
	
	WebDriver driver;
	LoginPage loginPage;
	DataBasePage databasePage;
	Bank_Cash bankCashPage;
	public String title="";
	
	@Before
	public void boforeRun()	{
		driver = TestBase.initDriver(); // we are launching the browser here/ and the init driver is also navigaithing through the URL. init method is responsible for returning the driver.this driver is available everywhere. 
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		bankCashPage = PageFactory.initElements(driver, Bank_Cash.class);
		databasePage=new DataBasePage();
	} 
	@Given ("^User is on the techfios login page$")
	public void User_is_on_the_techfios_login_page() {
		 driver.get("https://techfios.com/billing/?ng=admin/"); 
	}
	
	@Given ("^User is on \"([^\"]*)\" login page$")
	public void User_is_on_The_login_page(String page) {
		 if(page.equalsIgnoreCase("Techfios")) {
			driver.get("https://techfios.com/billing/?ng=admin/"); 
		}
		 else if(page.equalsIgnoreCase("GoogleSearch")) {
			 driver.get("https://www.google.com/"); 
		 }
	}
	@When("^User enters \"([^\"]*)\" from mysql database$")
	public void user_enters_from_mysql_database(String arg) throws Throwable {
		 switch(arg) {
		 case"username":
		 loginPage.enterUserName(databasePage.getData("username"));
		 break;
		 case"password":
		 loginPage.enterPassword(databasePage.getData("password"));
		 break;
		 default:
			 System.out.println("unable to click");
			 break;
		 }
	 } 
	
	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$") 
	public void user_enters_and(String username, String password) throws Throwable {
	    loginPage.enterCredential(username, password);
	}
	
	@When ("^User enters username as \"([^\"]*)\"$")
	public void user_enters_the_username(String username) {
		
		loginPage.enterUserName(username);
	}
	@When("^User enters password as \"([^\"]*)\"$") // when we are passing an argument "Techfios" in our feature we need to do this \"([^\"]*)\"$", we do this for earlier version but for latest version we {string} or {int} 
	public void user_enters_the_password(String password) throws Throwable {
	    loginPage.enterPassword(password);
	}


	@And("^User clicks on Signin button$")
	public void user_clicks_on_Signin_button() throws Throwable {
	   loginPage.clickSignInButton();
	}
	
	@And ("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String button) throws InterruptedException {
		switch(button) {
		case "Signin":
			loginPage.clickSignInButton();
			Thread.sleep(2000);
			break;
		case "bankCash":
			bankCashPage.clickOnBankAndCash();
		case "newAccount": 
			bankCashPage.clickOnNewAccount();
		case "submit" :
			bankCashPage.clickOnSubmitButton();
			break;
			default:
				System.out.println("unable to click");
				break;
		}
	}
	
	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() throws Throwable {
	   String expectedTitle = "Dashboard- iBilling";
	   String actualTitle = loginPage.getPageTitle();
	   Assert.assertEquals(expectedTitle, actualTitle);
	   takesScreeenShotAtEndOfTest(driver);
	}
	
	@Then("^User lands on new account page$")
	public void user_should_lands_on_new_account_page() {
		if(driver.getPageSource().contains("Accounts")) 
			Assert.assertTrue("accounts page", true);
			else {
				Assert.assertTrue("Wrong page", false);
			}
	}
	@And("^User enters in accounts page \"([^\"]*)\" \"([^\"]*)\"$") 
	public void user_enters_in_accounts_page(String element, String accountDetails) throws Throwable {	
		switch(element) {
		case "accountTitle":
			bankCashPage.enterAccountTitle(accountDetails);
		case "description":
			bankCashPage.enterDescriptionOfTheAccount(accountDetails);
		case "initialBalance":
			bankCashPage.enterInitialBalanceOfTheAccount(accountDetails);
		case "accountNumber":
			bankCashPage.enterAccountNumber(accountDetails);
		case "contactPerson":
			bankCashPage.enterOnContactPerson(accountDetails);
		case "Phone":
			bankCashPage.enterPhoneNumber(accountDetails);
		case "internetBankingURL":
			bankCashPage.enterInternetBankingInformation(accountDetails);
			break;
		default:
			System.out.println("unable to click");
			break;
		}
	}
//	@And ("^User clicks on the \"([^\"]*)\"$") 
	public void users_clicks_on_submit()	{
		bankCashPage.clickOnSubmitButton();
	}
	
	@Then("^User should be able to validate account created successfully$")
	public void User_should_be_able_to_validate_account_created_successfully() throws Throwable {
		if (driver.getPageSource().contains("Account Created Successfully"))
			Assert.assertTrue(true);
			else
				Assert.assertTrue(false);
	}
//	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
