const credentials = require("../fixtures/credentials")

describe('Test task on cypress', () =>{
    it('Registration on the site a new user', () => {
        cy.visit(credentials.assetBaseURL)
        cy.get('a[class="btn btn-lg btn-block btn-tertiary bold text-dark Login-create"]').click()
        cy.get('[name="firstname"]').type(credentials.firstName)
        cy.get('[name="lastname"]').type('Snow')
        cy.get('[name="email"]').type("test_12300987676576@mailsac.com")
        cy.get('#PhoneNumber').type('+30506895315')
        cy.get('#Password').type('1234567890123')
        cy.get('#ConfirmPassword').type('1234567890123')
        cy.get('.btn-primary').click()
        
        
        // cy.reload()
        // cy.contains('.h2').should('be.visible')
        //cy.reload(true,{timeout:10000}).contains('Email Verification Required').should('be.visible')
  
})
})
