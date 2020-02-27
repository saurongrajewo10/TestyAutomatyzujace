const { Builder, By, Key, until } = require("selenium-webdriver")

async function Tc02LoginFailedWrongPassword(driver) {
    try {
        await driver.get("http://automationpractice.com/index.php");
        await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="email"]'))).sendKeys("bobtest@gmail.com");
        await driver.wait(until.elementLocated(By.xpath('//*[@id="passwd"]'))).sendKeys("ZleHaslo", Key.RETURN);
        await driver.wait(until.elementLocated(By.xpath('//*[@id="center_column"]/div[1]')));

        var testStatement = await driver.findElement(By.xpath('//*[@id="center_column"]/div[1]/ol')).getText();
        if (testStatement.match(/Authentication failed./)) {
        }
        else {
            console.log("Inappropriate error statement has been displayed");
            return false;
        }
        return true;
    }
    catch {
        console.log('Error Tc02LoginFailedWrongPassword');
        return false;
    }
}
module.exports.Tc02LoginFailedWrongPassword = Tc02LoginFailedWrongPassword;