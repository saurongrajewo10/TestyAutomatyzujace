const { Builder, By, Key, until } = require('selenium-webdriver');
const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));


async function Tc03LoginNeedBeforeShoppingContinueShopping() {

   try {
      let driver = await new Builder().forBrowser('chrome').build();
      await driver.manage().setTimeouts({ implicit: 5000 });
      driver.manage().window().maximize();
      await driver.get('http://automationpractice.com/index.php');

      const actions = driver.actions({ bridge: true });
      var elem = await driver.findElement(By.css('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.left-block > div > a.product_img_link > img'));
      await actions.move({ duration: 500, origin: elem, x: 0, y: 0 }).perform();
      await driver.wait(until.elementLocated(By.css('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span'))).click();
      await driver.wait(until.elementLocated(By.css('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span'))).click();

      var elem = await driver.findElement(By.css('#homefeatured > li:nth-child(2) > div > div.left-block > div > a.product_img_link > img'));
      await actions.move({ duration: 500, origin: elem, x: 0, y: 0 }).perform();
      await driver.wait(until.elementLocated(By.css('#homefeatured > li:nth-child(2) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default'))).click();
      await driver.wait(until.elementLocated(By.css('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span'))).click();

      var elem = await driver.findElement(By.css('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-item-of-tablet-line.first-item-of-mobile-line > div > div.left-block > div > a.product_img_link > img'));
      await actions.move({ duration: 500, origin: elem, x: 0, y: 0 }).perform();
      await driver.wait(until.elementLocated(By.css('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default'))).click();
      await driver.wait(until.elementLocated(By.css('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span'))).click();

      var elem = await driver.findElement(By.css('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-item-of-tablet-line.first-item-of-mobile-line > div > div.left-block > div > a.product_img_link > img'));
      await actions.move({ duration: 500, origin: elem, x: 0, y: 0 }).perform();
      await driver.wait(until.elementLocated(By.css('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default'))).click();
      await driver.wait(until.elementLocated(By.css('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a'))).click();

      let shoppingCartConfirm = await driver.wait(until.elementLocated(By.css('#cart_title'))).getText();
      if (shoppingCartConfirm.match(/SHOPPING-CART SUMMARY/)) {
      }
      else {
         console.log("Error Tc03LoginNeedBeforeShoppingContinueShopping user is not on shopping cart summary screen");
      }

      await driver.findElement(By.css('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium')).click();
      let authenticationPageConfirm = await driver.wait(until.elementLocated(By.css('#center_column > h1'))).getText();
      if (authenticationPageConfirm.match(/AUTHENTICATION/)) {
      }
      else {
         console.log("Error Tc03LoginNeedBeforeShoppingContinueShopping user is not on authentication page");
      }
   }
   catch { }
}

Tc03LoginNeedBeforeShoppingContinueShopping();

