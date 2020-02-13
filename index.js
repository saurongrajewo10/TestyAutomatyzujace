const { Builder, By, Key, util } = require("selenium-webdriver");
async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://google.pl");
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN)
    
}
example()