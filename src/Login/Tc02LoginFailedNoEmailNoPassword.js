const { Builder, By, Key, until } = require("selenium-webdriver")

async function Tc02LoginFailedNoEmailNoPassword(driver) {
    try {
        await driver.get("http://automationpractice.com/index.php");
        await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="SubmitLogin"]'))).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="center_column"]/div[1]')));

        var testKomunikatu = await driver.findElement(By.xpath('//*[@id="center_column"]/div[1]/ol')).getText();
        if (testKomunikatu.match(/An email address required./)) {
        }
        else {
            console.log("Inappropriate error statement has been displayed");
            return false;
        }
        return true;
    }
    catch {
        console.log('Error Tc02LoginFailedNoEmailNoPassword');
        return false;
    }
}

module.exports.Tc02LoginFailedNoEmailNoPassword = Tc02LoginFailedNoEmailNoPassword;