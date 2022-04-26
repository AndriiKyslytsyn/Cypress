const credentialsJunit = require("../fixtures/credentialsJunit")

describe('login to MongoDB and checj header menu', async() =>{
    it('login to MongoDB', async() => {
        await cy.visit(credentialsJunit.baseURL)
        await cy.get(credentialsJunit.usernameInput).type(credentialsJunit.username);
        await cy.get(credentialsJunit.passwordInput).type(credentialsJunit.pass)
    })
})