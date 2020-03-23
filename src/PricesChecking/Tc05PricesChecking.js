const { Builder, By, Key, until } = require('selenium-webdriver');

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

async function Tc05PricesChecking() {

    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().setTimeouts({ implicit: 5000 });
    driver.manage().window().maximize();
    await driver.get('http://automationpractice.com/index.php');
    const actions = driver.actions({ bridge: true });

    await addingToCart(driver, '#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.left-block > div > a.product_img_link > img', '#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default', 'ContinueShopping');
    await addingToCart(driver, '#homefeatured > li:nth-child(2) > div > div.left-block > div > a.product_img_link > img', '#homefeatured > li:nth-child(2) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default', 'ContinueShopping');
    await addingToCart(driver, '#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-item-of-tablet-line.first-item-of-mobile-line > div > div.left-block > div > a.product_img_link > img', '#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default', 'ContinueShopping');
    await addingToCart(driver, '#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-item-of-tablet-line.first-item-of-mobile-line > div > div.left-block > div > a.product_img_link > img', '#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default', 'ProceedToCheckout');

    await checkAreWeOnCorrectView(driver, '#cart_title', /SHOPPING-CART SUMMARY/, 'Error Tc05PricesChecking, user is not on shopping cart summary screen');

    await checkPriceAndQuantityOfProducts(driver, '1', '$16.51', '$16.51', '#product_price_1_1_0',
        '#product_1_1_0_0 > td.cart_quantity.text-center > input[type=hidden]:nth-child(1)', '#total_product_price_1_1_0', 'First product test failed');
    await checkPriceAndQuantityOfProducts(driver, '1', '$27.00', '$27.00', '#product_price_2_7_0 > span',
        '#product_2_7_0_0 > td.cart_quantity.text-center > input.cart_quantity_input.form-control.grey', '#total_product_price_2_7_0', 'Second product test failed');
    await checkPriceAndQuantityOfProducts(driver, '2', '$26.00', '$52.00', '#product_price_3_13_0 > span',
        '#product_3_13_0_0 > td.cart_quantity.text-center > input.cart_quantity_input.form-control.grey', '#total_product_price_3_13_0', 'Third product test failed');



    await driver.findElement(By.css('#cart_quantity_up_1_1_0_0')).click();
    await sleep(1500);
    await checkPriceAndQuantityOfProducts(driver, '2', '$16.51', '$33.02', '#product_price_1_1_0',
        '#product_1_1_0_0 > td.cart_quantity.text-center > input[type=hidden]:nth-child(1)', '#total_product_price_1_1_0', 'First product incrementation test failed');

    await driver.findElement(By.css('#cart_quantity_down_1_1_0_0')).click();
    await sleep(1500);
    await checkPriceAndQuantityOfProducts(driver, '1', '$16.51', '$16.51', '#product_price_1_1_0',
        '#product_1_1_0_0 > td.cart_quantity.text-center > input[type=hidden]:nth-child(1)', '#total_product_price_1_1_0', 'First product decrementation test failed');

    await driver.findElement(By.id('2_7_0_0')).click();
    await sleep(1500);
    let summCheck = await driver.findElements(By.css('#product_2_7_0_0 > td.cart_quantity.text-center > input.cart_quantity_input.form-control.grey'));
    if (summCheck != '') {
        console.log('ERROR Tc05PricesChecking element still in cart!')
    }
    if (await driver.findElement(By.css('#total_price_without_tax')).getText() !== '$70.51') {
        console.log('ERROR Tc05PricesChecking total cost is different than expected')
    }

    await driver.findElement(By.css('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium')).click();
    await checkAreWeOnCorrectView(driver, '#center_column > h1', /AUTHENTICATION/, 'Error Tc05PricesChecking, user is not on authentication screen');

    await driver.wait(until.elementLocated(By.xpath('//*[@id="email"]'))).sendKeys("bobtest@gmail.com");
    await driver.wait(until.elementLocated(By.xpath('//*[@id="passwd"]'))).sendKeys("Bobmars", Key.RETURN);
    await checkAreWeOnCorrectView(driver, '#center_column > h1', /ADDRESSES/, 'Error Tc05PricesChecking, user is not on address screen');

    let element = await driver.findElement(By.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a'));
    await actions.move({ duration: 350, origin: element, x: 0, y: 0 }).perform();
    await driver.wait(until.elementLocated(By.css('#button_order_cart'))).click();

    await driver.findElement(By.css('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium')).click();
    await checkAreWeOnCorrectView(driver, '#center_column > h1', /ADDRESSES/, 'Error Tc05PricesChecking, user is not on address screen');

    await driver.findElement(By.css('#center_column > form > p > button')).click();
    await checkAreWeOnCorrectView(driver, '#carrier_area > h1', /SHIPPING/, 'Error Tc05PricesChecking, user is not on shipping screen');
    await driver.findElement(By.css('#cgv')).click();

    await driver.findElement(By.css('#form > p > button')).click();
    await checkAreWeOnCorrectView(driver, '#center_column > h1', /PLEASE CHOOSE YOUR PAYMENT METHOD/, 'Error Tc05PricesChecking, user is not on shipping screen');
    await driver.findElement(By.css('#HOOK_PAYMENT > div:nth-child(1) > div > p')).click();
    await driver.findElement(By.css('#cart_navigation > button')).click();

    if (await driver.findElement(By.css('#center_column > div > span > strong')).getText() !== '$70.51') {
        console.log('Error Tc05PricesChecking, price of order is incorrect')
    }
    await driver.close();
}

async function addingToCart(driver, cssOfProduct, cssAddToCartButton, ContinueShoppingOrProceedToCheckout) {
    const actions = driver.actions({ bridge: true });
    var elem = await driver.findElement(By.css(cssOfProduct));
    await actions.move({ duration: 350, origin: elem, x: 0, y: 0 }).perform();
    await driver.wait(until.elementLocated(By.css(cssAddToCartButton))).click();

    if (ContinueShoppingOrProceedToCheckout === 'ContinueShopping') {
        await driver.wait(until.elementLocated(By.css('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span'))).click();
    }
    else if (ContinueShoppingOrProceedToCheckout === 'ProceedToCheckout') {
        await driver.wait(until.elementLocated(By.css('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a'))).click();
    }
}

async function checkAreWeOnCorrectView(driver, cssSelectorOfHeader, phraseToCompare, ErrorStatement) {
    let headerStatement = await driver.wait(until.elementLocated(By.css(cssSelectorOfHeader))).getText();
    if (!headerStatement.match(phraseToCompare)) {
        console.log(ErrorStatement);
        
    }
}

async function checkPriceAndQuantityOfProducts(driver, expectedQuantity, expectedUnitPrice, expectedTotalPrice, unitPriceSelector, quantitySelector, totalPriceSelector, error) {
    let productCheckQuantity = await driver.wait(until.elementLocated(By.css(quantitySelector))).getAttribute("value");
    if (productCheckQuantity != expectedQuantity) {
        console.log('Error Tc05PricesChecking, product quantity incorrect ' + error);
    }
    let productChecUnitPrice = await driver.wait(until.elementLocated(By.css(unitPriceSelector))).getText();
    if (productChecUnitPrice != expectedUnitPrice) {
        console.log('Error Tc05PricesChecking, product unit price is incorrect ' + error);
    }
    let productChecTotalPrice = await driver.wait(until.elementLocated(By.css(totalPriceSelector))).getText();
    if (productChecTotalPrice != expectedTotalPrice) {
        console.log('Error Tc05PricesChecking, product total price is incorrect ' + error);
    }
}

Tc05PricesChecking();