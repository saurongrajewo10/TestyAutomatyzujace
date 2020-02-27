const { Tc02LoginFailedNoEmailNoPassword } = require("./Tc02LoginFailedNoEmailNoPassword");
const { Tc02LoginFailedNoEmail } = require("./Tc02LoginFailedNoEmail");
const { Tc02LoginFailedInvalidEmailFormat } = require("./Tc02LoginFailedInvalidEmailFormat");
const { Tc02LoginFailedWrongPassword } = require("./Tc02LoginFailedWrongPassword");
const { Tc02LoginSuccessfull } = require("./Tc02LoginSuccessfull");
const { Builder } = require("selenium-webdriver");

async function Tc02Login() {
    let driver = await new Builder().forBrowser("chrome").build();
    await Tc02LoginFailedNoEmailNoPassword(driver);
    await Tc02LoginFailedNoEmail(driver);
    await Tc02LoginFailedInvalidEmailFormat(driver);
    await Tc02LoginFailedWrongPassword(driver);
    await Tc02LoginSuccessfull(driver);
}

module.exports.Tc02Login = Tc02Login;