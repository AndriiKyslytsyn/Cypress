describe('Test task on cypress', () =>{
    it('Registration on the site a new user', () => {
        cy.visit('https://dev.asset.accountant')
        cy.get('a[class="btn btn-lg btn-block btn-tertiary bold text-dark Login-create"]').click()
        cy.get('[name="firstname"]').type('John')
        cy.get('[name="lastname"]').type('Snow')
        let loginpart = "test_123"
        cy.get('[name="email"]').type(fi + '@mailsac.com')
    })
})

