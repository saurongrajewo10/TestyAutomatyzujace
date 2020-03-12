const { Builder, By, Key, until } = require("selenium-webdriver");
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function Tc03ShoppingProcessRemovingProductFromCart() {

    try {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get("http://automationpractice.com/index.php");

        const actions = driver.actions({ bridge: true });
        var elem = await driver.findElement(By.xpath('//*[@id="homefeatured"]/li[1]/div/div[1]/div/a[1]/img'));
        await actions.move({ duration: 1000, origin: elem, x: 0, y: 0 }).perform();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="homefeatured"]/li[1]/div/div[2]/div[2]/a[1]/span'))).click();
        await driver.manage().setTimeouts({ implicit: 2000 }).then(() => { driver.findElement(By.xpath('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a')).click() });

        var errorMessageIsUserInRightPlace = await driver.wait(until.elementLocated(By.xpath('//*[@id="order_step"]/li[1]/span'))).getText();
        if (errorMessageIsUserInRightPlace.match(/ Summary/)) {
        }
        else {
            console.log("Tc03ShoppingProcessRemovingProductFromCart user is not in shopping cart summary");
        }

        var errorMessageIsProductVisibleInCart = await driver.wait(until.elementLocated(By.xpath('//*[@id="summary_products_quantity"]'))).getText();
        if (errorMessageIsProductVisibleInCart.match(/1 Product/)) {
        }
        else {
            console.log("Tc03ShoppingProcessRemovingProductFromCart there id different amount of products in shopping cart than expected");
        }

        await driver.findElement(By.xpath('//*[@id="1_1_0_0"]/i')).click();
        await sleep(3000);
        var errorMessageConfirmingThatCartIsEmpty = await driver.wait(until.elementLocated(By.xpath('//*[@id="center_column"]'))).getText();
        if (errorMessageConfirmingThatCartIsEmpty.match(/Your shopping cart is empty./)) {
        }
        else {
            console.log("Error Tc03ShoppingProcessRemovingProductFromCart shopping cart is not empty");
        }

        // let d = await testForReload();


        await driver.findElement(By.className('logo img-responsive')).click();
        var pageUrl = (await driver.getCurrentUrl()).toString();
        if (pageUrl == 'http://automationpractice.com/index.php') {
        }
        else {
            console.log('Error Tc03ShoppingProcessRemovingProductFromCart Main page address do not match to pattern');
        }

        // await driver.navigate().refresh;
    }
    catch {
        console.log('Error Tc03ShoppingProcessRemovingProductFromCart');
    }
}
Tc03ShoppingProcessRemovingProductFromCart();


// function testForReload(){
//     return new Promise( resolve => {
//         driver.findElement(By.xpath('//*[@id="authentication"]')).className.add('old');

//         let listener = setInterval( ( ) => {
//             let exit = driver.findElement(By.xpath('//*[@id="authentication"]')).className.include('old');

//             if( exit ) {
//                 clearInterval( listener )
//                 resolve()
//             }

//         }, 100 )
//     })
// }