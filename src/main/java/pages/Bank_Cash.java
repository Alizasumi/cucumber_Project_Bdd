package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Bank_Cash extends TestBase{
	
	WebDriver driver;

	public Bank_Cash(WebDriver driver) {
		this.driver = driver;
	}

	// Element Library
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Bank & Cash')]") WebElement bank_Cash;
	@FindBy(how = How.XPATH, using = "//a[contains(text(),'New Account')]") WebElement new_Account;
	@FindBy(how = How.XPATH, using = "//*[contains(text(),'Add New Account')]") WebElement add_New_Account;
	@FindBy(how = How.XPATH, using = "//input[@id='account']") WebElement account_Title;
	@FindBy(how = How.XPATH, using = "//input[@id='description']") WebElement Description ;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']") WebElement initial_Balance;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']") WebElement account_Number;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']") WebElement contact_Person;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']") WebElement contact_Phone;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']") WebElement internet_Banking;
	@FindBy(how = How.XPATH, using = "//*[contains(text(),' Submit')]") WebElement save_Button;
	@FindBy(how = How.XPATH, using = "//div[@class='alert alert-success fade in']") WebElement success_Button;
	
	//Methods to interact with the elements
	public void clickOnBankAndCash() {
		bank_Cash.click();
	}

	public void clickOnNewAccount() {
		new_Account.click();
}
	public String getPageTitle() {
		return add_New_Account.getText();
		
	}
	public void enterAccountTitle(String accounttitle) {
		account_Title.sendKeys(TestBase.generateRandomNumbers() + accounttitle);
}
	public void enterDescriptionOfTheAccount(String description) {
		Description.sendKeys(TestBase.generateRandomNumbers() + description);
}
	public void enterInitialBalanceOfTheAccount(String balance) {
		initial_Balance.sendKeys(TestBase.generateRandomNumbers() + balance);
}
	public void enterAccountNumber(String accountNumber) {
		account_Number.sendKeys(TestBase.generateRandomNumbers() + accountNumber);
}
	public void enterOnContactPerson(String contactPerson) {
		contact_Person.sendKeys(TestBase.generateRandomNumbers() + contactPerson);
}
	public void enterPhoneNumber(String phone) {
		contact_Phone.sendKeys(TestBase.generateRandomNumbers() + phone);
}
	public void enterInternetBankingInformation(String internet) {
		internet_Banking.sendKeys(TestBase.generateRandomNumbers() + internet);
}
	public void clickOnSubmitButton() {
		save_Button.click();
	}
	public String checkSucessMessage() {
		return success_Button.getText();
	}

}
