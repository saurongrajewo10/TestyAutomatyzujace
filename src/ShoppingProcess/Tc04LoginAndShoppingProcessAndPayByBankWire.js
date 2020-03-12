const { Builder, By, Key, until } = require('selenium-webdriver');

async function Tc04LoginAndShoppingProcessAndPayByBankWire() {
    try {
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts({ implicit: 5000 });
        driver.manage().window().maximize();
        await driver.get('http://automationpractice.com/index.php');

        const actions = driver.actions({ bridge: true });

        await driver.findElement(By.css('#header > div.nav > div > div > nav > div.header_user_info > a')).click();

        let authenticationPageConfirm = await driver.wait(until.elementLocated(By.css('#center_column > h1'))).getText();
        if (authenticationPageConfirm.match(/AUTHENTICATION/)) {
        }
        else {
            console.log("Error Tc04LoginAndShoppingProcessAndPayByBankWire user is not on authentication page");
        }
        await driver.wait(until.elementLocated(By.css('#email'))).sendKeys('bobtest@gmail.com');
        await driver.wait(until.elementLocated(By.css('#passwd'))).sendKeys('Bobmars', Key.RETURN);

        let myAccountPageConfirm = await driver.wait(until.elementLocated(By.css('#center_column > h1'))).getText();
        if (myAccountPageConfirm.match(/MY ACCOUNT/)) {
        }
        else {
            console.log("Error Tc04LoginAndShoppingProcessAndPayByBankWire user is not on my account page");
        }

        await driver.findElement(By.css('#header_logo > a')).click();
        var product = driver.findElement(By.css('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-line.first-item-of-tablet-line.first-item-of-mobile-line.last-mobile-line > div > div.left-block > div > a.product_img_link > img'));
        await actions.move({ duration: 500, origin: product, x: 0, y: 0 }).perform();
        await driver.findElement(By.css('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-line.first-item-of-tablet-line.first-item-of-mobile-line.last-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span')).click();
        await driver.wait(until.elementLocated(By.css('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a'))).click();

        let shoppingCartConfirm = await driver.wait(until.elementLocated(By.css('#cart_title'))).getText();
        if (shoppingCartConfirm.match(/SHOPPING-CART SUMMARY/)) {
        }
        else {
            console.log("Error Tc04LoginAndShoppingProcessAndPayByBankWire user is not on shopping cart summary screen");
        }

        await driver.findElement(By.css('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium')).click();

        let addressScreenConfirm = await driver.wait(until.elementLocated(By.css('#center_column > h1'))).getText();
        if (addressScreenConfirm.match(/ADDRESSES/)) {
        }
        else {
            console.log("Error Tc04LoginAndShoppingProcessAndPayByBankWire user is not on address screen");
        }

        await driver.findElement(By.css('#center_column > form > p > button')).click();

        let shippingScreenConfirm = await driver.wait(until.elementLocated(By.css('#carrier_area > h1'))).getText();
        if (shippingScreenConfirm.match(/SHIPPING/)) {
        }
        else {
            console.log("Error Tc04LoginAndShoppingProcessAndPayByBankWire user is not on shipping screen");
        }

        await driver.findElement(By.css('#cgv')).click();
        await driver.findElement(By.css('#form > p > button')).click();

        let paymentMethodScreenConfirm = await driver.wait(until.elementLocated(By.css('#center_column > h1'))).getText();
        if (paymentMethodScreenConfirm.match(/PLEASE CHOOSE YOUR PAYMENT METHOD/)) {
        }
        else {
            console.log("Error Tc04LoginAndShoppingProcessAndPayByBankWire user is not on payment method screen");
        }

        await driver.findElement(By.css('#HOOK_PAYMENT > div:nth-child(1) > div > p > a')).click();

        let orderSummaryScreenConfirm = await driver.wait(until.elementLocated(By.css('#center_column > h1'))).getText();
        if (orderSummaryScreenConfirm.match(/ORDER SUMMARY/)) {
        }
        else {
            console.log("Error Tc04LoginAndShoppingProcessAndPayByBankWire user is not on order summary screen");
        }

        await driver.findElement(By.css('#cart_navigation > button')).click();

        let orderConfirmationScreenConfirm = await driver.wait(until.elementLocated(By.css('#center_column > h1'))).getText();
        if (orderConfirmationScreenConfirm.match(/ORDER CONFIRMATION/)) {
        }
        else {
            console.log("Error Tc04LoginAndShoppingProcessAndPayByBankWire user is not on order confirmation screen");
        }
        await driver.findElement(By.css('#center_column > p > a')).click();

        let orderHistoryScreenConfirm = await driver.wait(until.elementLocated(By.css('#center_column > h1'))).getText();
        if (orderHistoryScreenConfirm.match(/ORDER HISTORY/)) {
        }
        else {
            console.log("Error Tc04LoginAndShoppingProcessAndPayByBankWire user is not on order history screen");
        }
        await driver.findElement(By.css('#center_column > ul > li:nth-child(2) > a')).click();
    }
    catch{

    }
}

Tc04LoginAndShoppingProcessAndPayByBankWire();