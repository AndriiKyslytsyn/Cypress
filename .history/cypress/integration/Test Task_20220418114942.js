describe('Test task on cypress', () =>{
    it('Registration on the site a new user', () => {
        cy.visit('https://dev.asset.accountant')
        cy.pause(6000)
        cy.get('a[class="btn btn-lg btn-block btn-tertiary bold text-dark Login-create"]').click()

    })
})

