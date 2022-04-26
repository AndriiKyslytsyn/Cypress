describe('Test task on cypress', () =>{
    it('Registration on the site a new user', () => {
        cy.visit('https://github.com')
        /onst emailPart = 'test_123'
        cy.get('div.d-flex.flex-justify-between > .d-flex > .d-inline-block').click()
        cy.get('#email').type('@mailsac.com')




        
        // cy.reload()
        // cy.contains('.h2').should('be.visible')
        //cy.reload(true,{timeout:10000}).contains('Email Verification Required').should('be.visible')
  
})
})
