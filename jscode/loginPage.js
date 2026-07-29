
let HomePage = require('./homePage');
let { connectdata, dbPassword, dbUsername } = require('./util');
class LoginPage {
    constructor() {
        this.url = 'https://www.saucedemo.com/';
    }

    function3() {

        let homePage = new HomePage();
        // homePage.location = "new location";


        homePage.location = "New York"; // Output: "new location"
        console.log(homePage.location);
        homePage.function1();

    }
}

console.log(dbUsername);
console.log(dbPassword);
connectdata();



