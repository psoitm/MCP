//class Example
class HomePage {
    location = "USA";
    phone = "123-456-7890";
    state = "California";
    street = "123 Main St";



    constructor(name) {
        this.title = "Home Page";
        this.name = name;
        console.log("HomePage constructor called");
    }

    function1() {

        // console.log("HomePage function1 called");
        // console.log("Location: " + this.location);
        // console.log("Title: " + this.title);
        // console.log("Name: " + this.name);
        console.log("Home Page function1 called");

    }

}
class AboutPage extends HomePage {
    aboutInfo = "This is the about page of our website.";
    constructor(name) {
        super(name);
        console.log("AboutPage constructor called");
    }
    function3() {
        console.log("About Page function3 called");
        console.log("Location: " + this.location);
        console.log("Title: " + this.title);
        console.log("Name: " + this.name);
        console.log("About Info: " + this.aboutInfo);

    }
}

class LoginPage extends HomePage {
    constructor(name) {
        super(name);
        this.title = "Login Page";
        console.log("Child constructor called");
    }
    function2() {
        console.log("Login Page function2 called");
        console.log("Location: " + this.location);
        console.log("Title: " + this.title);
        console.log("Name: " + this.name);
    }
}

// let loginPage = new LoginPage("Pardeep");
// loginPage.function1();
// loginPage.function2();
let aboutPage = new AboutPage("About Us");
aboutPage.function1();
aboutPage.function3();  
