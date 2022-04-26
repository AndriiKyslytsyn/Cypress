describe('Test task on cypress', () =>{
    it('Registration on the site a new user', () => {
        cy.visit('https://testproject.io/')
        const emailPart = 'test_123567'
        // cy.get('div.d-flex.flex-justify-between > .d-flex > .d-inline-block').click()
        // cy.get('#email').type(emailPart+'@gmail.com',{force: true})
        // cy.get('#email-container > .flex-column > .js-continue-button').click()
        // const password = 'warcoral1234'
        // cy.get('#password').type(password)
        cy.wait(3000)
        cy.get('.wpcf7-form-control-wrap > .wpcf7-form-control').type(emailPart+'@mailsac.com')
        cy.get('.wpcf7-submit').click()
        



        




        
        // cy.reload()
        // cy.contains('.h2').should('be.visible')
        //cy.reload(true,{timeout:10000}).contains('Email Verification Required').should('be.visible')
  
})
})
