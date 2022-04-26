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
    static String keywords = "//a[contains(text(),'Keywords')]";
    static String parameters = "//a[contains(text(),'Parameters')]";
    static String executions = "//a[contains(text(),'Executions')]";
    static String schedule = "//a[contains(text(),' Scheduler')]";
    static String grid = "//a[contains(text(),' Grid')]";
    static String admin = "//a[contains(text(),' Admin')]";

}

module.exports = new Credential()