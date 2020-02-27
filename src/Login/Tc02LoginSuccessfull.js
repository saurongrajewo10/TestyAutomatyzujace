const { Builder, By, Key, until } = require("selenium-webdriver")

async function Tc02LoginSuccessfull(driver) {

    try {
        await driver.get("http://automationpractice.com/index.php");
        await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="email"]'))).sendKeys('bobtest@gmail.com');
        await driver.wait(until.elementLocated(By.xpath('//*[@id="passwd"]'))).sendKeys('Bobmars', Key.ENTER);

        var signOutButton = await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[2]/a')).getText();
        if (signOutButton.match(/Sign out/)) {
            await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[2]/a')).click();
            await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')).click();
        }
        else {
            console.log("Sign out button has not been found");
            return false;
        }
        return true;
    }
    catch {
        console.log('Error Tc02LoginSuccessfull');
        return false;
    }
}

module.exports.Tc02LoginSuccessfull = Tc02LoginSuccessfull;