const credentialsJunit = require("../fixtures/credentialsJunit")

describe('login to MongoDB and checj header menu', async() =>{
    it('login to MongoDB', async() => {
        await cy.visit(credentialsJunit.baseURL);
        await cy.get(credentialsJunit.usernameInput).clear();
        await cy.get(credentialsJunit.usernameInput).type(credentialsJunit.username);
        await cy.get(credentialsJunit.passwordInput).clear();
        await cy.get(credentialsJunit.passwordInput).type(credentialsJunit.password);
        await cy.get(credentialsJunit.submitButton).click();
        await cy.wait(2000)


    })
    it('extendedtest tabs on header menu', async() => {
        await cy.visit(credentialsJunit.baseURL);
        await cy.get(credentialsJunit.usernameInput).clear();
        await cy.get(credentialsJunit.usernameInput).type(credentialsJunit.username);
        await cy.get(credentialsJunit.passwordInput).clear();
        await cy.get(credentialsJunit.passwordInput).type(credentialsJunit.password);
        await cy.get(credentialsJunit.submitButton).click();
        await cy.get(credentialsJunit.keywords).click();
        await cy.get(credentialsJunit.parameters).click();
        await cy.get(credentialsJunit.executions).click();
        await cy.get(credentialsJunit.schedule).click();
        await cy.get(credentialsJunit.grid).click();
        await cy.get(credentialsJunit.admin).click();
    })
})