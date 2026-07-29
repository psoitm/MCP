

class BasePage {
    constructor() {
        this.url = 'https://www.saucedemo.com/';
    }

    function2() {
        console.log("BasePage function2 called");
        console.log("URL: " + this.url);
    }
}
module.exports = BasePage;


