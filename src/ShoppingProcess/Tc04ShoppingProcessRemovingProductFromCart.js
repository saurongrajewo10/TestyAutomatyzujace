const { Builder, By, Key, until } = require("selenium-webdriver");

async function Tc04ShoppingProcessRemovingProductFromCart() {
    //try {
    let driver = await new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    await driver.get("http://automationpractice.com/index.php");
    const actions = driver.actions({ bridge: true });
    var elem = await driver.findElement(By.xpath('//*[@id="homefeatured"]/li[1]/div/div[1]/div/a[1]/img'));
    await actions.move({ duration: 1000, origin: elem, x: 0, y: 0 }).perform();
    await driver.wait(until.elementLocated(By.xpath('//*[@id="homefeatured"]/li[1]/div/div[2]/div[2]/a[1]/span'))).click();
    //await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[1]/header/div[3]/div/div/div[4]/div[1]/div[2]/div[4]/a/span/i'))).click();

    // }
    // catch {
    //     console.log('Error Tc04ShoppingProcessRemovingProductFromCart');
    // }
}
Tc04ShoppingProcessRemovingProductFromCart();