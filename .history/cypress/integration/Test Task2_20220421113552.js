describe('Test task on cypress', () =>{
    it('Registration on the site a new user', () => {
        cy.visit('https://github.com')
        const emailPart = 'test_123'
        cy.get('#user_email').type()



        
        // cy.reload()
        // cy.contains('.h2').should('be.visible')
        //cy.reload(true,{timeout:10000}).contains('Email Verification Required').should('be.visible')
  
})
})
