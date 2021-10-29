package pages;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {
	
	static WebDriver driver;
	public static WebDriver initDriver() {
		  System.setProperty("webdriver.chrome.driver", ".\\drivers\\chromedriver.exe");
		  driver = new ChromeDriver();
		  driver.manage().window().maximize();
		  driver.manage().deleteAllCookies();
		  driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);
		  driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); 
		  return driver;
		 }
	public static void takesScreeenShotAtEndOfTest(WebDriver driver) throws IOException {
		TakesScreenshot ts = (TakesScreenshot)driver;//TakesScrenshot is not a class its an interface. we need cast it with the driver, we also can't create an object of an intrface. 
		File sourceFile = ts.getScreenshotAs(OutputType.FILE);// takes the screenshot and save it in file
		
		SimpleDateFormat formatter = new SimpleDateFormat("MMddyy_HHmmss");
		Date date = new Date();
		String label = formatter.format(date);
		
		String currenDirectory = System.getProperty("user.dir");
		FileUtils.copyFile(sourceFile, new File(currenDirectory + "/screenshot/"+ label + ".png")); //its better
	}

	public static int generateRandomNumbers() {// to pass the number we need to use return keyword
		Random rnd = new Random();
		int generatedNumber = rnd.nextInt(999);
		return generatedNumber; 
		
	}

}
