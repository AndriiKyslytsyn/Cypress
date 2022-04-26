class MainPage {
    
    String Site_Url = "http://localhost:8080/";

    // Credentials
    static String username = "admin";
    static String password = "init";
    // login inputs and submit
    String usernameInput = "[name='username']";
    String passwordInput = "[name='password']";
    String submitButton = "//button[@type='submit']";

    // Element for check loaded page
    public static String homePageElement = "//p[contains(text(),'STEP 3.18.3 - Copyright')]";

    // Chenge page locators
    String keywords = "//a[contains(text(),'Keywords')]";
    String parameters = "//a[contains(text(),'Parameters')]";
    String executions = "//a[contains(text(),'Executions')]";
    String schedule = "//a[contains(text(),' Scheduler')]";
    String grid = "//a[contains(text(),' Grid')]";
   admin = "//a[contains(text(),' Admin')]";
}