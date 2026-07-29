
const BasePage = require('./jscode/basePage');

class HomePage extends BasePage {
    #location = "San Francisco, CA";

    constructor() {
        super();
    }

    function1() {
        console.log("HomePage function1 called");
        console.log("Location: " + this.location);

    }

    get location() {
        return this.#location;
    }

    set location(value) {
        this.#location = value;
    }

}
module.exports = HomePage;

let homePage = new HomePage();
homePage.function2();