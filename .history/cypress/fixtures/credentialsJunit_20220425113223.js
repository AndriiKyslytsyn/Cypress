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
    homePageElement = "//p[contains(text(), 'STEP 3.18.3 - Copyright © exense GmbH')]"
    keywordsPageElement = "//button[contains(text(), 'New keyword')]";
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
    admin = "";

}

module.exports = new Credential()