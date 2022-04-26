class MainPage {

    //Base URL
    baseURL = "http://localhost:8080";

    // login inputs and submit
    usernameInput = "[name='username']";
    passwordInput = "[name='password']";
    submitButton = ".btn";

    // Element for check loaded page
    homePageElement = ":nth-child(3) > .btn"

    // Change page locators
    keywords = ".glyphicon.glyphicon-record";
    parameters = ".glyphicon.glyphicon-list-alt";
    executions = ".glyphicon glyphicon-tasks']";
    schedule = "li a span[class='glyphicon glyphicon-time']";
    grid = "li a span[class='glyphicon glyphicon-th']";
    admin = "ul[class='nav navbar-nav'] [class='glyphicon glyphicon-cog']";
}
module.exports = new MainPage()