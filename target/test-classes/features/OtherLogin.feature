@OtherLogin @Smoke
Feature: Techfios OtherLogin functionality validation 

@OtherScenario1
Scenario: 1 User should be able to login with valid credentials 

 Given User is on the techfios login page      
 When User enters username as "demo@techfios.com"   
 When User enters password as "abc123" 
 And User clicks on Signin button 
 Then User should land on Dashboard page
 
@OtherScenario2
Scenario: 2 User should not be able to login with invalid credentials 

 Given User is on the techfios login page   
 When User enters username as "demo@techfios.com"  
 When User enters password as "abc124" 
 And User clicks on Signin button 
 Then User should land on Dashboard page
 
@OtherScenario3 
Scenario: 3 User should not be able to login with invalid credentials  
 Given User is on the techfios login page  
 When User enters username as "demo1@techfios.com"  
 When User enters password as "abc123" 
 And User clicks on Signin button 
 Then User should land on Dashboard page
 
@OtherScenario4  
Scenario: 4 User should not be able to login with invalid credentials 
 
 Given User is on the techfios login page  
 When User enters username as "demo1@techfios.com"  
 When User enters password as "abc124" 
 And User clicks on Signin button 
 Then User should land on Dashboard page