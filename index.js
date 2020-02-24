const { Tc02Login } = require("./src/Login/Tc02LogIn");

async function testing() {
    if(process.argv.indexOf('TC02') > -1 || process.argv.length === 2){
        Tc02Login();
    }
}

testing();