class MainPage {
    
//Base URL
baseURL = "http://localhost:8080";

// login inputs and submit
usernameInput = "[name='username']";
passwordInput = "[name='password']";
submitButton = ".btn";

// Element for check loaded page
homePageElement = ":nth-child(3) > .btn"
keywordsPageElement = "[ng-controller='FunctionPackageActionsCtrl']";
parametersPageElement = "[class='glyphicon glyphicon-question-sign ng-scope']";
executionsPageElement = "[class='ng-binding'][ng-click='selectTab(tab.id)']";
schedulerPageElement = "[ng-click='configureScheduler()']";
gridPageElement = "[ng-click='select($event)'][class='nav-link ng-binding']";
adminPageElement = "[ng-click='editUser(row.username)'][class='ng-binding']";
// Chenge page locators
keywords = "li a span[class='glyphicon glyphicon-record']";
parameters = "li a span[class='glyphicon glyphicon-list-alt']";
executions = "li a span[class='glyphicon glyphicon-tasks']";
schedule = "li a span[class='glyphicon glyphicon-time']";

admin = "ul[class='nav navbar-nav'] [class='glyphicon glyphicon-cog']";


}
module.exports = new MainPage()