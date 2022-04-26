class Credential {


        // Credentials
         username = "admin";
 password = "init";
        // login inputs and submit
      usernameInput = "[name='username']";
      passwordInput = "[name='password']";
        submitButton = "//button[@type='submit']";
    
        // Element for check loaded page
     keywordsPageElement = "//button[contains(text(), 'New keyword')]";
     parametersPageElement = "//button[contains(text(), 'New parameter')]";
     executionsPageElement = "//a[contains(text(), ' Execution list ')]";
      schedulerPageElement = "//button[contains(text(), 'New task')]";
   gridPageElement = "//a[contains(text(), 'Agents')]";
   adminPageElement = "//button[contains(text(), 'Add user')]";
        // Chenge page locators
       keywords = "//a[contains(text(),'Keywords')]";
   parameters = "//a[contains(text(),'Parameters')]";
  executions = "//a[contains(text(),'Executions')]";
 schedule = "//a[contains(text(),' Scheduler')]";
  grid = "//a[contains(text(),' Grid')]";
        static String admin = "//a[contains(text(),' Admin')]";

}

module.exports = new Credential()