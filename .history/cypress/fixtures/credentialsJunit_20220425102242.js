class Credential {


        // Credentials
         username = "admin";
 password = "init";
        // login inputs and submit
        static String usernameInput = "[name='username']";
        static String passwordInput = "[name='password']";
        static String submitButton = "//button[@type='submit']";
    
        // Element for check loaded page
        static String keywordsPageElement = "//button[contains(text(), 'New keyword')]";
        static String parametersPageElement = "//button[contains(text(), 'New parameter')]";
        static String executionsPageElement = "//a[contains(text(), ' Execution list ')]";
        static String schedulerPageElement = "//button[contains(text(), 'New task')]";
        static String gridPageElement = "//a[contains(text(), 'Agents')]";
        static String adminPageElement = "//button[contains(text(), 'Add user')]";
        // Chenge page locators
        static String keywords = "//a[contains(text(),'Keywords')]";
        static String parameters = "//a[contains(text(),'Parameters')]";
        static String executions = "//a[contains(text(),'Executions')]";
        static String schedule = "//a[contains(text(),' Scheduler')]";
        static String grid = "//a[contains(text(),' Grid')]";
        static String admin = "//a[contains(text(),' Admin')]";

}

module.exports = new Credential()