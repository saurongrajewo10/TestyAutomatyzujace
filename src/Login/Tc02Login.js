const { Builder, By, Key, util } = require("selenium-webdriver")
async function Tc02Zaloguj() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://automationpractice.com/index.php")
    await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')).click();
    //await driver.findElement(By.xpath("//input[@id='email")).click();
    //await driver.findElement(By.xpath('//text[@id="email"]')).sendKeys("bobtestgmail.com");
    //await driver.findElement(By.xpath('//*[@id="passwd"]')).sendKeys("Bobmars");

    //driver.quit();
}
Tc02Zaloguj()
