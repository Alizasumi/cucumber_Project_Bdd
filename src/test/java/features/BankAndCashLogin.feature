@BankCashFeature 
Feature: Techfios bank and cash New Account Functionality 

Scenario Outline: User should be able to login with valid credentials and open a new account	
	
	Given User is on the techfios login page    
	When User enters username as "<username>"                   
	When User enters password as "<password>"
	And  User clicks on Signin button 
	Then User should land on Dashboard page 
	And User clicks on "bankCash"   
	And User clicks on "newAccount" 
	Then User lands on new account page 
	And User enters in accounts page "accountTitle" "<account_Title>"      
	And User enters in accounts page "description" "<Description>"
	And User enters in accounts page "initialBalance" "<initial_Balance>"
	And User enters in accounts page "accountNumber" "<account_Number>"
	And User enters in accounts page "contactPerson" "<contact_Person>"
	And User enters in accounts page "Phone" "<contact_Phone>"
	And User enters in accounts page "internetBankingURL" "<internet_Banking>"
	And User clicks on "submit"   
	Then User should be able to validate account created successfully
	
	
	
	Examples:
	|username|password|account_Title|Description|initial_Balance|account_Number|contact_Person|contact_Phone|internet_Banking|
	|demo@techfios.com|abc123|savingaccount|vvvv9v|10000|75034303|sumi|0434343|http://www.tdcanadatrust.com|
	
	