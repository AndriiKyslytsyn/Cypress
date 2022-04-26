describe('Test task on cypress', () =>{
    it('Registration on the site a new user', () => {
        cy.visit('https://dev.asset.accountant')
        cy.get('a[class="btn btn-lg btn-block btn-tertiary bold text-dark Login-create"]').click()
        cy.get('[name="firstname"]').type('John')
        cy.get('[name="lastname"]').type('Snow')
        let loginpart = "test_123"
        cy.get('[name="email"]').type(loginpart + '@mailsac.com')
        cy.get('#PhoneNumber').type('+3580658655')
        cy.get('#Password').type('1234567890123')
        cy.get('#ConfirmPassword').type('1234567890123')
        cy.get('.btn-primary').click()
        cy.reload()
        cy.contains('.btn-primary').should('be.visible')
        cy.reload(true,{timeout:10000}).contains('.btn-primary').
  
})
})
