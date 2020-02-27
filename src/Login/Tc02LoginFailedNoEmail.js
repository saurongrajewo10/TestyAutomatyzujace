const { Builder, By, Key, until } = require("selenium-webdriver")

async function Tc02LoginFailedNoEmail(driver) {

    try {
        await driver.get("http://automationpractice.com/index.php");
        await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="passwd"]'))).sendKeys("BobMars", Key.RETURN);
        await driver.wait(until.elementLocated(By.xpath('//*[@id="center_column"]/div[1]')));

        var errorMessage = await driver.findElement(By.xpath('//*[@id="center_column"]/div[1]/ol')).getText();
        if (errorMessage.match(/An email address required./)) {
        }
        else {
            console.log("Inappropriate error statement has been displayed");
            return false;
        }
        return true;
    }
    catch {
        console.log('Error Tc02LoginFailedNoEmail');
        return false;
    }
}
module.exports.Tc02LoginFailedNoEmail = Tc02LoginFailedNoEmail;