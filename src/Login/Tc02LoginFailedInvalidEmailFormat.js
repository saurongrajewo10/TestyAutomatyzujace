const { Builder, By, Key, until } = require("selenium-webdriver")

async function Tc02LoginFailedInvalidEmailFormat(driver) {
    try {
        await driver.get("http://automationpractice.com/index.php");
        await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="email"]'))).sendKeys("Bobmars");
        await driver.wait(until.elementLocated(By.xpath('//*[@id="passwd"]'))).sendKeys("Bobmars", Key.RETURN);
        await driver.wait(until.elementLocated(By.xpath('//*[@id="SubmitLogin"]'))).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="center_column"]/div[1]')));

        var testStatement = await driver.findElement(By.xpath('//*[@id="center_column"]/div[1]/ol')).getText();
        if (testStatement.match(/Invalid email address./)) {
        }
        else {
            console.log("Inappropriate error statement has been displayed");
            return false;
        }
        return true;
    }
    catch {
        console.log('Error Tc02LoginFailedInvalidEmailFormat');
        return false;
    }
}
module.exports.Tc02LoginFailedInvalidEmailFormat = Tc02LoginFailedInvalidEmailFormat;