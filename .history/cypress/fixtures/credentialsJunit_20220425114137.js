class Credential {
    //Base URL
    baseURL = "http://localhost:8080";

    // Credentials
    username = "admin";
    password = "init";
    // login inputs and submit
    usernameInput = "[name='username']";
    passwordInput = "[name='password']";
    submitButton = ".btn";

    // Element for check loaded page
    homePageElement = ":nth-child(3) > .btn"
    keywordsPageElement = "";
    parametersPageElement = "//button[contains(text(), 'New parameter')]";
    executionsPageElement = "//a[contains(text(), ' Execution list ')]";
    schedulerPageElement = "//button[contains(text(), 'New task')]";
    gridPageElement = "//a[contains(text(), 'Agents')]";
    adminPageElement = "//button[contains(text(), 'Add user')]";
    // Chenge page locators
    keywords = "li a span[class='glyphicon glyphicon-record']";
    parameters = "li a span[class='glyphicon glyphicon-list-alt']";
    executions = "li a span[class='glyphicon glyphicon-tasks']";
    schedule = "li a span[class='glyphicon glyphicon-time']";
    grid = "li a span[class='glyphicon glyphicon-th']";
    admin = "ul[class='nav navbar-nav'] [class='glyphicon glyphicon-cog']";

}

module.exports = new Credential()