class HomePage {
    #location = "USA";
    phone = "123-456-7890";
    #state = "California";
    street = "123 Main St";
    #function1() {
        console.log("Home Page function1 called");
    }
    function2() {
        this.#function1();
    }
    function3() {

    }
}
class AboutPage extends HomePage {
    aboutInfo = "This is the about page of our website.";
    constructor(name) {
        super();
    }
}


let aboutPage = new AboutPage("About Us");
aboutPage.function2();
