@LoginFeature @Smoke
Feature: Techfios Login functionality Validation 

@Other1
Scenario Outline: 1 User should be able to login with valid credentials 

	Given User is on "Techfios" login page   
  	When User enters "<username>" and "<password>"  
	And User clicks on Signin button   
#	And User clicks on "Signin"  
	Then User should land on Dashboard page

	
	
	Examples:
	|username|password|
	|demo@techfios.com|abc123|
##	|demo1@techfios.com|abc123|
#	|accountTitle|
#	|saving account|
	

