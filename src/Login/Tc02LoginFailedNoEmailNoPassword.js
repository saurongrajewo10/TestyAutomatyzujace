const { Builder, By, Key, until } = require("selenium-webdriver")

async function Tc02LoginFailedNoEmailNoPassword() {
    console.clear();
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://automationpractice.com/index.php")
    await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')).click();
    await driver.wait(until.elementLocated(By.xpath('//*[@id="SubmitLogin"]'))).click();
}
Tc02LoginFailedNoEmailNoPassword()
