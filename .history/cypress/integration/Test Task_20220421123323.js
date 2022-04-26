const credentials = require("../fixtures/credentials")

describe('Test task on cypress', () =>{
    it('Registration on the site a new user', () => {
        cy.visit(credentials.assetBaseURL)
        cy.get('a[class="btn btn-lg btn-block btn-tertiary bold text-dark Login-create"]').click()
        cy.get('[name="firstname"]').type(credentials.firstName)
        cy.get('[name="lastname"]').type(credentials.lastName)
        cy.get('[name="email"]').type(credentials.Email)
        cy.get('#PhoneNumber').type(credentials.phoneNumber)
        cy.get('#Password').type(credentials.password)
        cy.get('#ConfirmPassword').type(credentials.password)
        cy.get('.btn-primary').click()
        
        
        // cy.reload()
        // cy.contains('.h2').should('be.visible')
        //cy.reload(true,{timeout:10000}).contains('Email Verification Required').should('be.visible')
  
})
})
