const { Builder, By, Key, until } = require("selenium-webdriver");

async function Tc04ShoppingProcessRemovingProductFromCart() {
    try {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get("http://automationpractice.com/index.php");
        await driver.wait(until.elementLocated(By.xpath('//*[@id="homefeatured"]/li[1]/div/div[2]/div[2]/a[1]/span'))).click();
        await driver.elementLocated(By.className('btn btn-default button button-medium')).click();
    }
    catch {
        console.log('Error Tc04ShoppingProcessRemovingProductFromCart');
    }
}
Tc04ShoppingProcessRemovingProductFromCart();