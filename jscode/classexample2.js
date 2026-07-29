class HomePage {
    location = "USA";

    constructor(name) {
        this.title = "Home Page";
        this.name = name;
        console.log("HomePage constructor called");
    }
    function1() {
        console.log("Home Page function1 called");
    }
}
class AboutPage extends HomePage {
    aboutInfo = "This is the about page of our website.";
    constructor(name) {
        super(name);
        console.log("AboutPage constructor called");
    }

    function1() {
        console.log("About Page function1 called");

    }
}
class LoginPage extends AboutPage {
    constructor(name) {
        super(name);
        console.log("LoginPage constructor called");
    }
    function1() {
        console.log("Login Page function1 called");
    }
}

let loginPage = new LoginPage("Pardeep");
loginPage.function1();
let aboutPage = new AboutPage("About Us");
aboutPage.function1();

