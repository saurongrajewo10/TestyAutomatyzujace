const { Tc02LoginFailedNoEmailNoPassword } = require("./Tc02LoginFailedNoEmailNoPassword");
const { Builder } = require("selenium-webdriver");

async function Tc02Login() {
    let driver = await new Builder().forBrowser("chrome").build();
    Tc02LoginFailedNoEmailNoPassword(driver);
}

module.exports.Tc02Login = Tc02Login;