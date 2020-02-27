const { Tc02LoginFailedInvalidEmailFormat } = require("./Tc02LoginFailedInvalidEmailFormat");
const { Tc02LoginFailedNoEmail } = require("./Tc02LoginFailedNoEmail");
const { Tc02LoginFailedNoEmailNoPassword } = require("./Tc02LoginFailedNoEmailNoPassword");
const { Tc02LoginFailedWrongPassword } = require("./Tc02LoginFailedWrongPassword");
const { Tc02LoginSuccess } = require("./Tc02LoginSuccess");

const { Builder } = require("selenium-webdriver");

async function Tc02Login() {
    try {
    let driver = await new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    await Tc02LoginFailedInvalidEmailFormat(driver);
    await Tc02LoginFailedNoEmail(driver);
    await Tc02LoginFailedNoEmailNoPassword(driver);
    await Tc02LoginFailedWrongPassword(driver);
    await Tc02LoginSuccess(driver);
}
catch {
}

}
module.exports.Tc02Login = Tc02Login;