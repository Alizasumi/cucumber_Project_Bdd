@DbLogin
Feature: Techfios Login functionality Validation driving the data form MySql database

Background:
	Given User is on the techfios login page
@DbScenario1
Scenario: User should be able to login with valid credentials 
  
 When User enters "username" from mysql database        
 When User enters "password"  from mysql database         
 And User clicks on Signin button  
 Then User should land on Dashboard page


