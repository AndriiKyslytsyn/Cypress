const credentials = require("./credentials")

describe('Test task on cypress', async() => {
    it('Registration on the site a new user', async () => {
        await cy.visit(credentials.assetBaseURL)
        await cy.get('a[class="btn btn-lg btn-block btn-tertiary bold text-dark Login-create"]').click()
        await cy.get('[name="firstname"]').type(credentials.firstName)
        await cy.get('[name="lastname"]').type(credentials.lastName)
        await cy.get('[name="email"]').type(credentials.Email)
        await cy.get('#PhoneNumber').type(credentials.phoneNumber)
        await cy.get('#Password').type(credentials.password)
        await cy.get('#ConfirmPassword').type(credentials.password)
        await cy.wait(5000)
        await cy.get('.btn-primary').click()
        await cy.wait(10000)

    })

    xit('Sing in on base url', () => {
        cy.visit(credentials.assetBaseURL)
        cy.get('.btn-light').click()
        cy.get('#Username').type(credentials.Email)
        cy.get('.mt-3 > .btn').click()




    })


})